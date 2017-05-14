/**
 * CandidatesController
 *
 * @description :: Server-side logic for managing Candidates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    prePopulate: function(req, res) {
        CandidatesService.prePopulateCandidates(function(prePopulatedCandidates) {
            res.json({success: true});
        });
    }

};

