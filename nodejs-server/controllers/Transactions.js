'use strict';

var utils = require('../utils/writer.js');
var Transactions = require('../service/TransactionsService');

module.exports.getTransaction = function getTransaction (req, res, next) {
  var iD = req.swagger.params['ID'].value;
  Transactions.getTransaction(iD)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
