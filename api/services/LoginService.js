module.exports = {

    getUser: function(user, next) {
        Users.find( {  
            email: user.email, 
            password: user.password 
        }).exec(function countCB(error, found) {

            if ( error ) next( {error: error} );
            else next( found );

        });
    },

    
}