import { colors, Colors, colorsVariants } from '@itswooble/colors';

function colorToHex(color: Colors | string): string {
	if(colorsVariants.includes(color as Colors))
		return colors[color as Colors];
	else
		return color; 
}

export default colorToHex;
