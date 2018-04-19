'use strict';


/**
 * Individual block information
 * The {Block} endpoint returns information about a specific block within the Blockchain. Note that the genesis block is block zero.
 *
 * block Integer Block number to retrieve
 * returns Block
 **/
exports.getBlock = function(block) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "previousBlockHash" : "previousBlockHash",
  "consensusMetadata" : "consensusMetadata",
  "stateHash" : "stateHash",
  "nonHashData" : "nonHashData",
  "proposerID" : "proposerID",
  "transactions" : [ {
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
  }, {
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
  } ],
  "timestamp" : {
    "seconds" : 0,
    "nanos" : 6
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

