const { componentToHex, rgbToHex } = require("./utils");

describe("componentToHex", () => {
  describe("Given 255", () => {
    it("should return ff", () => {
      expect(componentToHex(255)).toEqual("ff");
    });
  });
  describe("Given 0", () => {
    it("should return 00", () => {
      expect(componentToHex(0)).toEqual("00");
    });
  });
  describe("Given 169", () => {
    it("should return a9", () => {
      expect(componentToHex(169)).toEqual("a9");
    });
  });
});

describe("rgbToHex", () => {
  describe("Given 245, 169, 184", () => {
    it("should return #f5a9b8", () => {
      expect(rgbToHex(245, 169, 184)).toEqual("#f5a9b8");
    });
  });
  describe("Given 0, 0, 0", () => {
    it("should return #000000", () => {
      expect(rgbToHex(0, 0, 0)).toEqual("#000000");
    });
  });
  describe("Given 255, 255, 255", () => {
    it("should return #ffffff", () => {
      expect(rgbToHex(255, 255, 255)).toEqual("#ffffff");
    });
  });
});
