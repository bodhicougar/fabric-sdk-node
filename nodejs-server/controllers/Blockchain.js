'use strict';

var utils = require('../utils/writer.js');
var Blockchain = require('../service/BlockchainService');

module.exports.getChain = function getChain (req, res, next) {
  Blockchain.getChain()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
