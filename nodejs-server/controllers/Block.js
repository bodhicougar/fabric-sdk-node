'use strict';

var utils = require('../utils/writer.js');
var Block = require('../service/BlockService');

module.exports.getBlock = function getBlock (req, res, next) {
  var block = req.swagger.params['Block'].value;
  Block.getBlock(block)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
