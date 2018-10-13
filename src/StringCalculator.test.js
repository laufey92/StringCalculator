const add = require("./StringCalculator");

it("Should return 0 when the string is empty",  () => {
	expect(add("")).toBe(0);
});