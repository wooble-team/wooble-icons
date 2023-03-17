import { DetailedHTMLProps, SVGAttributes } from 'react';
import { Colors } from '@itswooble/colors';

interface Props extends DetailedHTMLProps<SVGAttributes<SVGElement>, SVGAElement> {
	color?: Colors;
};

export default Props;
