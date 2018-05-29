////////////////
// Grid Tests //
////////////////


// 1. Make sure col is between 1 & 12;
const columnMinMax = (input) => {
	if (input >= 1 && input <= 12) {
		return input;
	} else {
		console.error('only columns between 1 & 12');
		return;
	};
};

test('should return numbers only between 1 and 12', () => {
	expect(columnMinMax(6)).toBe(6);
	expect(columnMinMax(0)).toBe(console.error('only columns between 1 & 12'));
});


// 2. Convert number to percentage
const converyToPercent = (input) => {
	let calc = 100 / input;
	let number = Number(calc).toFixed(2) + "%";
	return number;
};

test('should convert number to a percentage value', () => {
	expect(converyToPercent(3)).toBe("33.33%");
});