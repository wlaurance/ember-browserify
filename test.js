var browserify = require('browserify'),
    b = browserify();

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
