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

it("Should split the string on new line", () => {
	expect(add("1\n2")).toBe(3);
});

it("Should ignore numbers over 1000", () => {
	expect(add("1001\n2")).toBe(2);
});

/*
Náði ekki að klára rest

it("Should ignore throw an exception if the number is negative", () => {
	expect(add("-1")).toThrow(Error);
});

it("Should ignore throw an exception if the number is negative", () => {
	expect(add("1,4,5,-2,-5")).toThrow(Error);
});

it("Should add a delimiter", () => {
	expect(add("//;\n2;5;3")).toBe(10);
});

*/



