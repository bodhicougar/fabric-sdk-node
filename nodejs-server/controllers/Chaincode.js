'use strict';

var utils = require('../utils/writer.js');
var Chaincode = require('../service/ChaincodeService');

module.exports.chaincodeOp = function chaincodeOp (req, res, next) {
  var chaincodeOpPayload = req.swagger.params['ChaincodeOpPayload'].value;
  Chaincode.chaincodeOp(chaincodeOpPayload)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
