import { ThreeDimensionScrollWithContent } from '@/widgets/ThreeDimensionScroll';

import styles from './GalleryPage.module.css';
import { SoundSwitch } from '@/features/Sound';

export const GalleryPage = () => {
	return (
		<section className={styles.wrapper}>
			<ThreeDimensionScrollWithContent />
			<SoundSwitch />
		</section>
	);
};
