var em = require('./ember'),
    assert = require('assert');

describe('exported ember object', function(){

  it('should be equal to something', function() {
    assert.ok(em);
  });

  it('should have a few things attached to it to check if indeed this is a real ember object', function(){
    var things = ['Application', 'Button'];
    things.forEach(function (thing) {
      assert.ok(em[thing]);
    });
  });

});

describe('browserifying the ember object', function() {

  it('should be browserfiable', function (done) {
    var browserify = require('browserify'),
        b = browserify();

    b.add('./ember.js');
    var bundle = b.bundle();

    bundle.on('end', done);

    bundle.on('error', function(e) {
      throw e;
    });
  });

});
