const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("it should return ['Lighthouse','Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("it should return [] for ['chelsea']", () => {
    assert.deepEqual(tail(["chelsea"]), []);
  });
});
