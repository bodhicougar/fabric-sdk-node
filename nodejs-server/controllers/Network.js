'use strict';

var utils = require('../utils/writer.js');
var Network = require('../service/NetworkService');

module.exports.getPeers = function getPeers (req, res, next) {
  Network.getPeers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
