import React from 'react';
import cx from 'classnames';
import './Button.scss';
import { Link } from 'gatsby';

const Button = ({
	title, type = 'primary', className, isAlwaysDesktopPadding, to, isGatsbyLink = false,
}) => (isGatsbyLink ? (
	<Link
		type="button"
		to={to}
		className={cx({
			button: true,
			[`button--${type}`]: type,
			'button--always-desktop-padding': isAlwaysDesktopPadding,
			[className]: className,
		})}
	>
		{title}
	</Link>
) : (
	<a
		type="button"
		href={to}
		className={cx({
			button: true,
			[`button--${type}`]: type,
			'button--always-desktop-padding': isAlwaysDesktopPadding,
			[className]: className,
		})}
	>
		{title}
	</a>
));
export default Button;
