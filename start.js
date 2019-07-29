var AWS = require('aws-sdk');

module.exports = (clusterId) => {
    var rds = new AWS.RDS();
    var params = {
      DBClusterIdentifier: clusterId
    };
    rds.startDBCluster(params, function(err, data) {
      if (err) console.log(err, err.stack);
      else     console.log(data);
    });
};
