import { FC, useState } from 'react';
import { Frame } from '@/entities/Frame';
import { IFrame } from '../../lib';

import styles from './ThreeDimensionScroll.module.css';

interface ThreeDimensionScroll {
	frames: IFrame[];
}

const zSpacing: number = 1000;
const speedScroll: number = 1;

export const ThreeDimensionScroll: FC<ThreeDimensionScroll> = ({ frames }) => {
	const [position, setPosition] = useState<number>(0);

	const handleWheel = (event: React.WheelEvent) => {
		if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey && event.buttons === 0) {
			setPosition((prev) => {
				const newPostition = prev + event.deltaY * speedScroll;
				const bottomPosition = zSpacing * frames.length - zSpacing;
				if (newPostition < 0) {
					return 0;
				} else if (newPostition > bottomPosition) {
					return bottomPosition;
				}
				return newPostition;
			});
		}
	};

	return (
		<div className={styles.wrapper} onWheel={handleWheel}>
			{frames.map((frame, i) => (
				<Frame key={frame.id} offset={i * zSpacing * -1 + position} zSpacing={zSpacing}>
					{frame.content}
				</Frame>
			))}
		</div>
	);
};
