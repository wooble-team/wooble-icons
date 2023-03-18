import { DetailedHTMLProps, SVGAttributes } from 'react';
import { Colors } from '@itswooble/colors';

interface Props extends Omit<DetailedHTMLProps<SVGAttributes<SVGElement>, SVGAElement>, 'stroke' | 'fill'> {
	color?: Colors;
};

export default Props;
