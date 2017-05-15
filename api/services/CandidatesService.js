module.exports = {
    prePopulateCandidates: function(next){

        Candidates.findOrCreate(
           [ {id: 1, name:'Paul Walker'}, 
            {id: 2, name:'Vin Diesel'}, 
            {id: 3, name:'Michelle Rodriguez'}, 
            {id: 4, name:'Jordana Brewster'} ]
        ).exec(function createFindCB(error, createdOrFoundRecords){
            next( createdOrFoundRecords );
        });

    },
    list: function(next){

        Candidates.find().exec(function createFindCB(error, allCandidates){
            next( allCandidates );
        });

    }

}