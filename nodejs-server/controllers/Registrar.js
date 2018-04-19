'use strict';

var utils = require('../utils/writer.js');
var Registrar = require('../service/RegistrarService');

module.exports.deleteUserRegistration = function deleteUserRegistration (req, res, next) {
  var enrollmentID = req.swagger.params['enrollmentID'].value;
  Registrar.deleteUserRegistration(enrollmentID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserEnrollmentCertificate = function getUserEnrollmentCertificate (req, res, next) {
  var enrollmentID = req.swagger.params['enrollmentID'].value;
  Registrar.getUserEnrollmentCertificate(enrollmentID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserRegistration = function getUserRegistration (req, res, next) {
  var enrollmentID = req.swagger.params['enrollmentID'].value;
  Registrar.getUserRegistration(enrollmentID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserTransactionCertificate = function getUserTransactionCertificate (req, res, next) {
  var enrollmentID = req.swagger.params['enrollmentID'].value;
  var count = req.swagger.params['count'].value;
  Registrar.getUserTransactionCertificate(enrollmentID,count)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerUser = function registerUser (req, res, next) {
  var secret = req.swagger.params['Secret'].value;
  Registrar.registerUser(secret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
