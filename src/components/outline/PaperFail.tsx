import React from 'react';
import Props from '../../types/props';
import colorToHex from '../../utils/colorToHex';

import PaperFailIcon from '../../../icons/outline/PaperFail.svg';

const PaperFail: React.FC<Props> = ({ color = '#130F26', ...props }) => {
	return (
		<PaperFailIcon
			stroke={colorToHex(color)}
			{...props} />
	);
};

export default PaperFail;
