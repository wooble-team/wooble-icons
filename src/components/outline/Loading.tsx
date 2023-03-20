import React from 'react';
import Props from '../../types/props';
import colorToHex from '../../utils/colorToHex';

import LoadingIcon from '../../../icons/outline/Loading.svg';

import '../../styles/style.css';

const Loading: React.FC<Props> = ({ color = '#130F26', className, ...props }) => {
	return (
		<LoadingIcon
			className={`loading-icon ${className}`}
			fill={colorToHex(color)}
			{...props} />
	);
};

export default Loading;
