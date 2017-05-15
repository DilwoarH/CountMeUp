module.exports = {

    checkifUserExists: function(email, next) {
        Users.count({email:email}).exec(function countCB(error, found) {

            next( found );

        });
    },

    addUser: function(user, next){
        Users.create(
            {
                name: user.name,
                email: user.email,
                password: user.password
            }
        ).exec(function(error, user)
        {
            if ( error ) next( {error: error} );
            else next( user.id );
        });

    },

    addInitialUserCredits: function( user_id, next )
    {
        UserCredits.create(
            {
                user_id: user_id,
                remaining_credit: 3
            }
        ).exec(function(error, user)
        {
            if ( error ) next( {error: error} );
            else next( {success: true} );
        });
    }

}