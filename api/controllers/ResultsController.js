/**
 * ResultsController
 *
 * @description :: Server-side logic for managing Results
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    getResults: function(req, res) {
        ResultsService.getResults(function( results ) {
            res.json( results );
        });
    }

};

