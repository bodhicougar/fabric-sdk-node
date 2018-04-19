'use strict';


/**
 * Blockchain information
 * The Chain endpoint returns information about the current state of the blockchain such as the height, the current block hash, and the previous block hash.
 *
 * returns BlockchainInfo
 **/
exports.getChain = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "previousBlockHash" : "previousBlockHash",
  "currentBlockHash" : "currentBlockHash",
  "height" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

