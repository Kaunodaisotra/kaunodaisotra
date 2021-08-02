import React from 'react';

export default () => {
	if (typeof window === 'undefined') {
		return <p>Server Render</p>;
	}

	window.location = '/';

	return null;
};
