var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var should = chai.should();

var login = require('../lib/login');

var credentials = require('../credentials.json');

var username = credentials.USERNAME || process.env.USERNAME;
var password = credentials.PASSWORD || process.env.PASSWORD;

describe('vasttrafik-login', function() {
  it('should successfully log in', function() {
    return login({ username: username, password: password })
      .should.be.fulfilled
      .should.eventually.have.property('IsLoggedIn', true);
  });

  it('should fail login when missing credentials', function() {
    return login()
      .should.be.rejectedWith(Error);
  });

});
