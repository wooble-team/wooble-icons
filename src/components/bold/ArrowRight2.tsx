import React from 'react';
import Props from '../../types/props';
import colorToHex from '../../utils/colorToHex';

import ArrowRight2Icon from '../../../icons/bold/ArrowRight2.svg';

const ArrowRight2: React.FC<Props> = ({ color = '#130F26', ...props }) => {
	return (
		<ArrowRight2Icon
			fill={colorToHex(color)}
			{...props} />
	);
};

export default ArrowRight2;
