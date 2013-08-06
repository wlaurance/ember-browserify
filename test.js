var browserify = require('browserify'),
    b = browserify(),
    assert = require('assert');

describe('browserifying the ember object', function() {

  it('should be browserfiable', function (done) {
    b.add('./ember.js');
    var bundle = b.bundle();

    bundle.on('end', done);

    bundle.on('error', function(e) {
      throw e;
    });
  });

});

describe('test the handlebars thing', function() {
  it('should have a method named template', function() {
    var h = require('./handlebars-1.0.0-rc.4');
    assert.equal('function', typeof h.template);
  });
});
