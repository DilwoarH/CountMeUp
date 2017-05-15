/**
 * VotesController
 *
 * @description :: Server-side logic for managing Votes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    giveVote: function(req, res){

        if ( _.isUndefined( req.session.user ) 
            || _.isNull( req.session.user ) 
            || _.isUndefined( req.session.isAuthenticated ) 
            || _.isNull( req.session.isAuthenticated ) 
        ) {
            res.status( 403 );
            res.send( { error: "Voting requires login. Please visit /login or register at /register." } );
            return;
        }

        var user_id = req.session.user.id;
        var candidate = req.body;
        
        if ( _.isUndefined( candidate.candidate_id ) || _.isNull( candidate.candidate_id )  )
        {
            res.status( 403 );
            res.send( { error: "Invalid request." } );
            return;
        }

        VotesService.checkifCandidateExists( candidate.candidate_id, function(exists) 
        {
            if ( exists.error || exists == 0 )
            {
                res.status(403);
                res.send( {error: "Vote Invalid. Candidate does not exist."} );
                return;
            }

            VotesService.getUserCredit( user_id, function(userCredits){
                if ( !_.size( userCredits ) || userCredits[0].remaining_credit < 1)
                {
                    res.status( 403 );
                    res.send( {error: "Vote Invalid. You are out of votes."} );
                    return;
                }

                userCredits = userCredits[0];

                var new_credit = userCredits.remaining_credit - 1;

                VotesService.removeCredit( user_id, new_credit, function( creditUpdated ){
                    
                    if ( creditUpdated.error )
                    {
                        res.send( {error: "Vote Invalid. Error Occured."} );
                        res.status( 403 );
                        return;
                    }

                    var data = {
                        user_id: user_id,
                        candidate_id: candidate.candidate_id
                    };

                    VotesService.addVote( data, function( vote ) {
                        if ( vote.error )
                        {
                            res.status( 403 );
                            res.send( {error: "Vote Invalid. Error Occured."} );
                            return;
                        }
                        
                        res.status( 201 );
                        res.send({success:true});
                    });

                });

            });
        });
    }
};

