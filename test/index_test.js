import { expect } from "chai";
import { Cliquet, Collection } from "../src";

describe("Cliquet", function() {
  describe("#collection()", function() {
    it("should retrieve the collection object", function() {
      expect(new Cliquet("foo").collection("bar")).to.be.an.instanceOf(Collection);
    });
  });
});
