'use strict';


/**
 * Service endpoint for Chaincode operations
 * The /chaincode endpoint receives requests to deploy, invoke, and query a target Chaincode. This service endpoint implements the JSON RPC 2.0 specification with the payload identifying the desired Chaincode operation within the 'method' field.
 *
 * chaincodeOpPayload ChaincodeOpPayload Chaincode JSON RPC 2.0 payload
 * returns ChaincodeOpSuccess
 **/
exports.chaincodeOp = function(chaincodeOpPayload) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "Status" : "OK",
    "Message" : "500"
  },
  "id" : 0,
  "jsonrpc" : "2.0"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

