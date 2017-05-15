module.exports = {

    checkifCandidateExists: function(cand_id, next) {
        Candidates.count({id:cand_id}).exec(function countCB(error, found) {

            next( found );

        });
    },

    getUserCredit: function(user_id, next) {
        UserCredits.find({user_id:user_id}).exec(function countCB(error, found) {

            next( found );

        });
    },

    removeCredit: function( user_id, new_credit, next ){

        UserCredits.update( {user_id: user_id}, {remaining_credit: new_credit} ).exec(function afterwards(err, updated){

            if (err) {
                return next( {error: err} );
            }

            next(updated);
        });

    },

    addVote: function( data, next ){
        Votes.create(
            {
                user_id: data.user_id,
                candidate_id: data.candidate_id
            }
        ).exec(function(error, vote)
        {
            if ( error ) next( {error: error} );
            else next( vote );
        });
    }
};