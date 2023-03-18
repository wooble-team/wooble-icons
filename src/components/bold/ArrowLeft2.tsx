import React from 'react';
import Props from '../../types/props';

import ArrowLeft2Icon from '../../../icons/bold/ArrowLeft2.svg';

const ArrowLeft2: React.FC<Props> = ({ color = '#130F26', ...props }) => {
	return (
		<ArrowLeft2Icon
			fill={color}
			{...props} />
	);
};

export default ArrowLeft2;
