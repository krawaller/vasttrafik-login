var request = require('request');
var Q = require('kew');

var VASTTRAFIK_CARD_LOGIN_URL = 'https://www.vasttrafik.se/CustomerServices/EPiServerWs/SecureService.svc/Login';

function login(options) {

  var deferred = Q.defer();

  var username = options && options.username;
  var password = options && options.password;

  if(!username) {
    deferred.reject(new Error('username missing'));
  } else if(!password) {
    deferred.reject(new Error('password missing'));
  } else {
    var loginParams = {
      'request': {
        'RDC_Language': 'sv-SE',
        'Username': username,
        'Password': password,
        'IsPersistent': false
      }
    }

    request({
      url: VASTTRAFIK_CARD_LOGIN_URL,
      method: 'POST',
      jar: true,
      json: loginParams
    }, function(error, response, body) {
      if (error) {
        deferred.reject(error);
      } else {
        if (response.statusCode == 200) {
          if (body.d.IsLoggedIn) {
            deferred.resolve(body.d);
          } else {
            deferred.reject('Access denied');
          }
        } else {
          deferred.reject(new Error('Login responded with status: ' + response.statusCode));
        }
      }
    });
  }

  return deferred.promise;
}

module.exports = login;
