import React from 'react';
import Props from '../../types/props';
import colorToHex from '../../utils/colorToHex';

import BuyIcon from '../../../icons/bold/Buy.svg';

const Buy: React.FC<Props> = ({ color = '#130F26', ...props }) => {
	return (
		<BuyIcon
			fill={colorToHex(color)}
			{...props} />
	);
};

export default Buy;
