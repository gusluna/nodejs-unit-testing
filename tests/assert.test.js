const assert = require("assert");

describe("file to be tested", () => {
  context("function to be tested", () => {
    // before(() => {
    //   console.log("======== before ======");
    // });

    // after(() => {
    //   console.log("======== after ======");
    // });

    // beforeEach(() => {
    //   console.log("======== before Each ======");
    // });

    // afterEach(() => {
    //   console.log("======== after Each ======");
    // });
    it("should do something", () => {
      assert.equal(1, 1);
    });

    it("should do something else", () => {
      assert.deepEqual({ name: "joe" }, { name: "joe" });
    });

    it("it is a pending test");
  });
  context("another  function", () => {
    it("should do something");
  });
});
