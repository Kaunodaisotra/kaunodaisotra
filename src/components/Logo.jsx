import React from 'react';
import cx from 'classnames';
import LogoSvg from '../../static/img/logo.svg';
import './Link.scss';
import './Logo.scss';

const Logo = ({ className }) => (
	<a href="/">
		<img
			src={LogoSvg}
			alt="Kauno daistora"
			className={cx({
				[className]: className,
				logo: true,
			})}
		/>
	</a>
);

export default Logo;
