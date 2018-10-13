const add = require("./StringCalculator");

it("Should return 0 when the string is empty", () => {
	expect(add("")).toBe(0);
});

it("Should return the number if there is only 1 in the string", () => {
	expect(add("3")).toBe(3);
});