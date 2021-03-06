/**
 * CandidatesController
 *
 * @description :: Server-side logic for managing Candidates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    list: function(req, res){
        CandidatesService.list(function(list) {
            res.json(list);
        });
    }
};

