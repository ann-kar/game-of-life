import {add} from "../index";

describe("test", () => {
  it("test", () => {
    expect(2 + 2).toBe(4);
  });

  it('test 2', () => {
    expect(add(5,6)).toBe(11);
  });
});
