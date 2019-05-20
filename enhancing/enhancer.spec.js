const { repair, succeed, fail, get } = require("./enhancer.js");

describe("enhancer.js", () => {
  describe("succeed() method", () => {
    it("", () => {
      const item = {
        name: "something",
        enhancement: 15,
        durability: 100
      };
      const expected = {
        name: "something",
        enhancement: 16,
        durability: 100
      };
      const enhancedItem = succeed(item);
      expect(enhancedItem).toEqual(expected);
    });
  });
});

describe("repair() method", () => {
  it("accepts an item object and returns a new item with the durability restored to 100", () => {
    const item = num;
    const newItem = 100;
    expect(durability).toBe(newItem);
  });
});

describe("fail() method", () => {
  it("decrease", () => {
    let item = {
      name: "something",
      durability: 50,
      enhancement: 14
    };
    expect(fail(item)).toEqual({
      name: "something",
      durability: 45,
      enhancement: 14
    });
  });
  it("decrease enhencement by 1, if enhencement is greater then 16", () => {
    let item = {
      name: "something",
      durability: 50,
      enhancement: 17
    };
    expect(fail(item)).toEqual({
      name: "something",
      durability: 50,
      enhancement: 16
    });
  });
});
