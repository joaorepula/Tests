const Fibonacci = require("./fibonacci")
const assert = require("assert")
var sinon = require("sinon");
sinon.createSandbox()

;(async () => {
  {
    const fibonacci = new Fibonacci()
    const spy = sinon.spy(
      fibonacci,
      fibonacci.execute.name
    )

    for(const sequenci of fibonacci.execute(5)){ }
    const expectCallCount = 6;
    assert.strictEqual(spy.callCount, expectCallCount)

      const { args } = spy.getCall(2)

      const expectedParams = [3, 1, 2]

      assert.deepStrictEqual(args,expectedParams)

  }
  {
    const fibonacci = new Fibonacci()
    const spy = sinon.spy(
      fibonacci,
      fibonacci.execute.name
    )
    const results = [...fibonacci.execute(5)]
    const { args } = spy.getCall(2)

    const expectResult = [0,1,1,2,3];
    const expectedParams = [3,1,2];

    assert.deepStrictEqual(args,expectedParams)
    assert.deepStrictEqual(results, expectResult)

  }



})()