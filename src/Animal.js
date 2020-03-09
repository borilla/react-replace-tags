import React from 'react';

export default function Animal({ children, className }) {
	return <span className={className}>{children}</span>;
}
