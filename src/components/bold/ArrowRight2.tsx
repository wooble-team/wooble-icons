import React from 'react';
import Props from '../../types/props';

import ArrowRight2Icon from '../../../icons/bold/ArrowRight2.svg';

const ArrowRight2: React.FC<Props> = ({ color = '#130F26', ...props }) => {
	return (
		<ArrowRight2Icon
			fill={color}
			{...props} />
	);
};

export default ArrowRight2;
