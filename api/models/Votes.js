/**
 * Votes.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true
    },
    user_id: {
      type: 'integer'  
    },
    candidate_id: {
      type: 'integer',
      index: true
    }
  }
};

