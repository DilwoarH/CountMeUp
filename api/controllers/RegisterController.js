/**
 * RegisterController
 *
 * @description :: Server-side logic for managing Registers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const _ = require('lodash');

module.exports = {

    register: function(req, res){

        var user = req.body;
        
        if ( !_.size( user.name ) || !_.size( user.email )  || !_.size( user.password ) )
        {
            res.status(403);
            res.send( { error: "Invalid request." } );
            return;
        }

        user.password = AuthService.getHash( user.password );
        

        RegisterService.checkifUserExists( user.email, function( found ){

            if ( found != 0 )
            {
                res.status(403);
                res.json( { error: "User Already Registered" } );
                return;
            }  

            RegisterService.addUser( user, function(user_id) {
                
                if ( user_id.error ) 
                {
                    res.status(403);
                    res.send( { error: user.error.summary } );
                    return;
                }

                RegisterService.addInitialUserCredits( user_id, function( result ){
                    res.json( {success: true} );
                });

            });
        
        });

        
    }

};

