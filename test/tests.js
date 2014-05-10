var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var should = chai.should();

var login = require('../lib/login');

var username = process.env.USERNAME;
var password = process.env.PASSWORD;

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
