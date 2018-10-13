const add = require("./StringCalculator");

it("Should return 0 when the string is empty", () => {
	expect(add("")).toBe(0);
});

it("Should return the number if there is only 1 in the string", () => {
	expect(add("3")).toBe(3);
});

it("Should return the sum of 2 numbers", () => {
	expect(add("2,3")).toBe(5);
});

it("Should return the sum of multiple numbers", () => {
	expect(add("2,3,5")).toBe(10);
});