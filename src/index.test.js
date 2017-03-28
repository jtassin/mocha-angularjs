import 'jsdom-global/register';
import { expect } from 'chai';


before(function(done) {
var angularcontext = require('angularcontext');
var context = angularcontext.Context();
context.runFile(
    './node_modules/angular/angular.js',
    function (result, error) {
      if (error) {
        console.error(error);
        done(error);
      }
      else {
        global.angular = context.getAngular();
        console.log(3, context.getAngular(), 4);
        done();
        // can now use other methods of the context
      }
    }
);
});

// global.angular = 54;






describe('desc', () => {
  it('my test', () => {
  const getFive = require('./index').default;
  console.log(1, global.angular, 2);
  console.log(getFive()+10);
    expect(getFive()).to.equal(5);
  });
});