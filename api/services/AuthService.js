const crypto = require('crypto');

module.exports = {
  
  getSecret: function(next){
        return 'fdsfdsfsdfds21313123fdsfds';
  },

  getHash: function( message ){
        var secret = this.getSecret();
        var hash =  crypto
            .createHmac('sha256', secret)
            .update( message )
            .digest('hex');
        
        return hash;
  }
}