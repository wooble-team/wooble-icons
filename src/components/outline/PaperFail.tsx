import React from 'react';
import Props from '../../types/props';

import PaperFailIcon from '../../../icons/outline/PaperFail.svg';

const PaperFail: React.FC<Props> = ({ color = '#130F26', ...props }) => {
	return (
		<PaperFailIcon
			stroke={color}
			{...props} />
	);
};

export default PaperFail;
