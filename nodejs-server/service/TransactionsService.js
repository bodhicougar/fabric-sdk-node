'use strict';


/**
 * Individual transaction contents
 * The /transactions/{ID} endpoint returns the transaction matching the specified TXID.
 *
 * iD String Transaction to retrieve from the blockchain.
 * returns Transaction
 **/
exports.getTransaction = function(iD) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "chaincodeID" : "chaincodeID",
  "payload" : "payload",
  "signature" : "signature",
  "cert" : "cert",
  "id" : "id",
  "type" : "UNDEFINED",
  "nonce" : "nonce",
  "timestamp" : {
    "seconds" : 0,
    "nanos" : 6
  },
  "confidentialityLevel" : "PUBLIC"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

