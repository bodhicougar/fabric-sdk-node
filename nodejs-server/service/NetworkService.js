'use strict';


/**
 * List of network peers
 * The /network/peers endpoint returns a list of all existing network connections for the target peer node. The list includes both validating and non-validating peers.
 *
 * returns PeersMessage
 **/
exports.getPeers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "peers" : [ {
    "address" : "address",
    "pkiID" : "pkiID",
    "ID" : {
      "name" : "name"
    },
    "type" : "UNDEFINED"
  }, {
    "address" : "address",
    "pkiID" : "pkiID",
    "ID" : {
      "name" : "name"
    },
    "type" : "UNDEFINED"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

