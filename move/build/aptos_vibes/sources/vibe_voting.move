module aptos_vibes::vibe_voting {
    use std::signer;
    use std::string::{Self, String};
    use aptos_framework::event;
    use aptos_std::table::{Self, Table};
    use aptos_framework::account;

    /// Error codes
    const E_NOT_INITIALIZED: u64 = 1;
    const E_ALREADY_VOTED: u64 = 2;
    const E_NO_VOTE_TO_REMOVE: u64 = 3;

    /// Vote types
    const VOTE_UP: u8 = 1;
    const VOTE_DOWN: u8 = 2;

    /// Vote data for a project
    struct ProjectVotes has key, store {
        upvotes: u64,
        downvotes: u64,
        voters: Table<address, u8>, // voter address -> vote type (1=up, 2=down)
    }

    /// Global voting registry
    struct VotingRegistry has key {
        projects: Table<String, ProjectVotes>,
    }

    /// Events
    #[event]
    struct VoteEvent has drop, store {
        voter: address,
        project_id: String,
        vote_type: u8, // 1=up, 2=down, 0=removed
        timestamp: u64,
    }

    /// Initialize the voting system
    public entry fun initialize(admin: &signer) {
        let admin_addr = signer::address_of(admin);
        if (!exists<VotingRegistry>(admin_addr)) {
            move_to(admin, VotingRegistry {
                projects: table::new(),
            });
        }
    }

    /// Initialize a new project for voting
    public entry fun initialize_project(admin: &signer, project_id: String) acquires VotingRegistry {
        let admin_addr = signer::address_of(admin);
        assert!(exists<VotingRegistry>(admin_addr), E_NOT_INITIALIZED);
        
        let registry = borrow_global_mut<VotingRegistry>(admin_addr);
        
        if (!table::contains(&registry.projects, project_id)) {
            table::add(&mut registry.projects, project_id, ProjectVotes {
                upvotes: 0,
                downvotes: 0,
                voters: table::new(),
            });
        }
    }

    /// Cast an upvote for a project
    public entry fun upvote(voter: &signer, admin_addr: address, project_id: String) acquires VotingRegistry {
        vote_internal(voter, admin_addr, project_id, VOTE_UP);
    }

    /// Cast a downvote for a project
    public entry fun downvote(voter: &signer, admin_addr: address, project_id: String) acquires VotingRegistry {
        vote_internal(voter, admin_addr, project_id, VOTE_DOWN);
    }

    /// Remove a vote for a project
    public entry fun remove_vote(voter: &signer, admin_addr: address, project_id: String) acquires VotingRegistry {
        let voter_addr = signer::address_of(voter);
        assert!(exists<VotingRegistry>(admin_addr), E_NOT_INITIALIZED);
        
        let registry = borrow_global_mut<VotingRegistry>(admin_addr);
        assert!(table::contains(&registry.projects, project_id), E_NOT_INITIALIZED);
        
        let project_votes = table::borrow_mut(&mut registry.projects, project_id);
        assert!(table::contains(&project_votes.voters, voter_addr), E_NO_VOTE_TO_REMOVE);
        
        let previous_vote = table::remove(&mut project_votes.voters, voter_addr);
        
        // Decrement the appropriate vote count
        if (previous_vote == VOTE_UP) {
            project_votes.upvotes = project_votes.upvotes - 1;
        } else {
            project_votes.downvotes = project_votes.downvotes - 1;
        };

        // Emit vote removed event
        event::emit(VoteEvent {
            voter: voter_addr,
            project_id,
            vote_type: 0, // 0 indicates vote removal
            timestamp: aptos_framework::timestamp::now_microseconds(),
        });
    }

    /// Internal vote function
    fun vote_internal(voter: &signer, admin_addr: address, project_id: String, vote_type: u8) acquires VotingRegistry {
        let voter_addr = signer::address_of(voter);
        assert!(exists<VotingRegistry>(admin_addr), E_NOT_INITIALIZED);
        
        let registry = borrow_global_mut<VotingRegistry>(admin_addr);
        assert!(table::contains(&registry.projects, project_id), E_NOT_INITIALIZED);
        
        let project_votes = table::borrow_mut(&mut registry.projects, project_id);
        
        // Check if user has already voted
        if (table::contains(&project_votes.voters, voter_addr)) {
            let previous_vote = table::remove(&mut project_votes.voters, voter_addr);
            
            // Decrement previous vote count
            if (previous_vote == VOTE_UP) {
                project_votes.upvotes = project_votes.upvotes - 1;
            } else {
                project_votes.downvotes = project_votes.downvotes - 1;
            };
            
            // If same vote type, just remove (toggle off)
            if (previous_vote == vote_type) {
                event::emit(VoteEvent {
                    voter: voter_addr,
                    project_id,
                    vote_type: 0, // 0 indicates vote removal
                    timestamp: aptos_framework::timestamp::now_microseconds(),
                });
                return
            };
        };
        
        // Add new vote
        table::add(&mut project_votes.voters, voter_addr, vote_type);
        
        // Increment vote count
        if (vote_type == VOTE_UP) {
            project_votes.upvotes = project_votes.upvotes + 1;
        } else {
            project_votes.downvotes = project_votes.downvotes + 1;
        };

        // Emit vote event
        event::emit(VoteEvent {
            voter: voter_addr,
            project_id,
            vote_type,
            timestamp: aptos_framework::timestamp::now_microseconds(),
        });
    }

    /// Get vote counts for a project
    #[view]
    public fun get_project_votes(admin_addr: address, project_id: String): (u64, u64) acquires VotingRegistry {
        if (!exists<VotingRegistry>(admin_addr)) {
            return (0, 0)
        };
        
        let registry = borrow_global<VotingRegistry>(admin_addr);
        if (!table::contains(&registry.projects, project_id)) {
            return (0, 0)
        };
        
        let project_votes = table::borrow(&registry.projects, project_id);
        (project_votes.upvotes, project_votes.downvotes)
    }

    /// Get user's vote for a project (0=no vote, 1=upvote, 2=downvote)
    #[view]
    public fun get_user_vote(admin_addr: address, project_id: String, user_addr: address): u8 acquires VotingRegistry {
        if (!exists<VotingRegistry>(admin_addr)) {
            return 0
        };
        
        let registry = borrow_global<VotingRegistry>(admin_addr);
        if (!table::contains(&registry.projects, project_id)) {
            return 0
        };
        
        let project_votes = table::borrow(&registry.projects, project_id);
        if (!table::contains(&project_votes.voters, user_addr)) {
            return 0
        };
        
        *table::borrow(&project_votes.voters, user_addr)
    }

    /// Get vibe score for a project (upvotes - downvotes, never negative)
    #[view]
    public fun get_vibe_score(admin_addr: address, project_id: String): u64 acquires VotingRegistry {
        let (upvotes, downvotes) = get_project_votes(admin_addr, project_id);
        if (upvotes > downvotes) {
            upvotes - downvotes
        } else {
            0
        }
        // If you want to display negatives, do it in the frontend: upvotes - downvotes
    }
} 