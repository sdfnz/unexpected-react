function hexToRGB(hexColor) {
	if (hexColor.length === 7) {
		let red = hexColor.slice(1,3);
		let green = hexColor.slice(3,5);
		let blue = hexColor.slice(5,7);
		red = String(parseInt(red, 16));
		green = String(parseInt(green, 16));
		blue = String(parseInt(blue, 16));
		return [red, green, blue];
	} else if (hexColor.length === 6) {
		let red = hexColor.slice(0,2);
		let green = hexColor.slice(2,4);
		let blue = hexColor.slice(4,6);
		red = String(parseInt(red, 16));
		green = String(parseInt(green, 16));
		blue = String(parseInt(blue, 16));
		return [red, green, blue];
	} else {
		console.log("Invalid hex color code.");
		return -1;
	}
}

export default hexToRGB;
