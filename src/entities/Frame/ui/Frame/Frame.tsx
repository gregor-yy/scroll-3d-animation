import { FC, ReactNode } from 'react';

import styles from './Frame.module.css';

interface FrameProps {
	offset: number;
	zSpacing: number;
	children: ReactNode;
}

export const Frame: FC<FrameProps> = ({ offset, zSpacing, children }) => {
	return (
		<div
			className={styles.wrapper}
			id="frame"
			style={{ transform: `translateZ(${offset}px)`, opacity: offset < Math.abs(zSpacing) / 2 ? 1 : 0 }}
		>
			{children}
		</div>
	);
};
