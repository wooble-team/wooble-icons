import React from 'react';
import Props from '../../types/props';

import PaperFailIcon from '../../../icons/outline/PaperFail.svg';

const PaperFail: React.FC<Props> = ({ color, ...props }) => {
	return (
		<PaperFailIcon {...props} />
	);
};

export default PaperFail;
