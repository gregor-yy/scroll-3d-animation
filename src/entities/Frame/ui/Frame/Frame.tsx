import { FC } from 'react';

import styles from './Frame.module.css';

interface FrameProps {
	offset: number;
	zSpacing: number;
}

export const Frame: FC<FrameProps> = ({ offset, zSpacing }) => {
	return (
		<div
			className={styles.wrapper}
			id="frame"
			style={{ transform: `translateZ(${offset}px)`, opacity: offset < Math.abs(zSpacing) ? 1 : 0 }}
		>
			Frame
		</div>
	);
};
