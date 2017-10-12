const should = require('chai')should();

const fizzBuzzer = require('./fizzBuzzer');

describe('fizzBuzzer', function() {
  it('Should return fizz-buzz', function() {
    const normalCases = [ 15, 30, 45];
    normalCases.forEach(function(input){
      const output = fizzBuzzer(input);
      output.should.equal('fizz-buzz');


    });
  });
});
