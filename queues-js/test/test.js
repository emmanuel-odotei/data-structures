console.log = function() {};
const { assert, expect } = require('chai');

describe('', function () {
  it('', function() {
    let load
    try {
      load = require('../runway').load;
    } catch(e) {
      expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
    }

    expect(load, 'Did you declare a `load` function?').to.be.an.instanceOf(Function);
    
		const Queue = require('../Queue');
    
    let test = load([]);

    expect(test, 'Is the value that `load()` returns an instance of `Queue`?').to.be.instanceOf(Queue);
    expect(test, 'Did you return the constant you created, `runway`?').to.not.equal(undefined);
    // expect(test, 'Is the value that `load()` returns an instance of `Queue`?').to.be.instanceOf(Queue);
    expect(test, `Your current max size is \`${test.maxSize}\`, did you set a maximum size on \`runway\` of \`3\`?`).has.own.property('maxSize', 3);
  });
});
