module.exports = {
  
  getResults: function(next){

        Candidates.find()
        .populate('votes')
        .exec(function(err, candidate_votes) {

            var result = [];

            candidate_votes.forEach(function( candidate ) {
              var _formattedResult = {
                candidate_id: candidate.id,
                candidate_name: candidate.name,
                votes: candidate.votes.length
              };
              
              result.push( _formattedResult );

            }, this);


            next(result);
        });

  }

}