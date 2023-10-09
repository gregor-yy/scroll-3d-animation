import { useState, createRef, useEffect } from 'react';
import { classNames } from '@/shared/lib';
import { SoundGif, Audio } from '@/shared/assets';

import styles from './SoundSwitch.module.css';

export const SoundSwitch = () => {
	const [poused, setPoused] = useState<boolean>(true);
	const audioRef = createRef<HTMLAudioElement>();

	useEffect(() => {
		if (audioRef.current) {
			if (poused) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
		}
	}, [poused, audioRef]);

	useEffect(() => {
		const handleVisibilityChange = () => {
			if (document.hidden) {
				setPoused(true);
			}
		};
		document.addEventListener('visibilitychange', handleVisibilityChange);
		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
		};
	}, []);

	return (
		<>
			<img
				src={SoundGif}
				alt="sound"
				className={classNames(styles.switch, poused && styles.poused)}
				onClick={() => setPoused((prev) => !prev)}
			/>
			<audio ref={audioRef} src={Audio} loop />
		</>
	);
};
