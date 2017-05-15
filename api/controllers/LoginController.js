/**
 * LoginController
 *
 * @description :: Server-side logic for managing Logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    login: function(req, res){

        var user = req.body;
        
        if ( !_.size( user.email )  || !_.size( user.password ) )
        {
            res.send( { error: "Invalid request." } );
            return;
        }

        user.password = AuthService.getHash( user.password );

        LoginService.getUser( user, function( userFound ){

            if ( !_.size( userFound ) || userFound.error )
            {
                res.send( { error: "Invalid request." } );
                return;
            }

            req.session.user = userFound[0];
            req.session.isAuthenticated = true;
            res.json( {success: true} );

        } );
        
    },

    logout: function(req, res){
        delete( req.session.user );
        req.session.isAuthenticated = false;
        res.send( {success: true} );
    }

};

