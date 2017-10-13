const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('Should return fizz-buzz for inputs divisible by 15', function() {
    const normalCases = [ 15, 30, 45];
    normalCases.forEach(function(input){
      const output = fizzBuzzer(input);
      output.should.equal('fizz-buzz');
    });
  });

  it('Should return buzz for inputs divisble by 5', function() {
    const normalCases = [5, 10, 20, 25];
    normalCases.forEach(function(input){
      const output = fizzBuzzer(input);
      output.should.equal('buzz');
    });
  });

  it('Should return fizz for inputs divisble by 3', function() {
    const normalCases = [3, 6, 9, 12, ];
    normalCases.forEach(function(input){
      const output = fizzBuzzer(input);
      output.should.equal('fizz');
    });
  });

  it('Should return number should be same as input', function() {
    const normalCases = [ {input: 2, expected: 2}, {input: 4, expected: 4}, {input: 7, expected: 7}]
    normalCases.forEach(function(num){
      const output = fizzBuzzer(num.input);
      output.should.equal(num.expected);
    });
  });

  it('Should throw an error', function() {
    const errorCases = ['num', undefined, '4', '15'];
    errorCases.forEach(function(input) {
      (function() {
        fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});
