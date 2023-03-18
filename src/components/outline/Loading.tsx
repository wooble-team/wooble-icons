import React from 'react';
import Props from '../../types/props';

import LoadingIcon from '../../../icons/outline/Loading.svg';

import '../../styles/style.css';

const Loading: React.FC<Props> = ({ color = '#130F26', className, ...props }) => {
	return (
		<LoadingIcon
			className={`loading-icon ${className}`}
			fill={color}
			{...props} />
	);
};

export default Loading;
