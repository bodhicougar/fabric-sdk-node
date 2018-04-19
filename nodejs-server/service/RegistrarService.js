'use strict';


/**
 * Delete user login tokens from local storage
 * The /registrar/{enrollmentID} endpoint deletes any existing client login tokens from local storage. After the completion of this request, the target user will no longer be able to execute transactions.
 *
 * enrollmentID String Username for which login tokens are to be deleted
 * returns OK
 **/
exports.deleteUserRegistration = function(enrollmentID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "OK" : "OK",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve user enrollment certificate
 * The /registrar/{enrollmentID}/ecert endpoint retrieves the enrollment certificate for a given user that has registered with the certificate authority. If the user has registered, a confirmation message will be returned containing the URL-encoded enrollment certificate. Otherwise, an error will result.
 *
 * enrollmentID String EnrollmentID for which the certificate is requested
 * returns OK
 **/
exports.getUserEnrollmentCertificate = function(enrollmentID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "OK" : "OK",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Confirm the user has registered with the certificate authority
 * The /registrar/{enrollmentID} endpoint confirms whether the specified user has registered with the certificate authority. If the user has registered, a confirmation message will be returned. Otherwise, an authorization failure will result.
 *
 * enrollmentID String Username for which registration is to be confirmed
 * returns OK
 **/
exports.getUserRegistration = function(enrollmentID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "OK" : "OK",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve user transaction certificates
 * The /registrar/{enrollmentID}/tcert endpoint retrieves the transaction certificates for a given user that has registered with the certificate authority. If the user has registered, a confirmation message will be returned containing an array of URL-encoded transaction certificates. Otherwise, an error will result. The desired number of transaction certificates is specified with the optional 'count' query parameter. The default number of returned transaction certificates is 1 and 500 is the maximum number of certificates that can be retrieved with a single request.
 *
 * enrollmentID String EnrollmentID for which the certificate is requested
 * count String The desired number of transaction certificates. The default number of returned transaction certificates is 1 and 500 is the maximum number of certificates that can be retrieved with a single request (optional)
 * returns OK
 **/
exports.getUserTransactionCertificate = function(enrollmentID,count) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "OK" : "OK",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register a user with the certificate authority
 * The /registrar endpoint receives requests to register a user with the certificate authority. The request must supply the registration id and password within the payload. If the registration is successful, the required transaction certificates are received and stored locally. Otherwise, an error is displayed alongside with a reason for the failure.
 *
 * secret Secret User enrollment credentials
 * returns OK
 **/
exports.registerUser = function(secret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "OK" : "OK",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

