import { ThreeDimensionScrollWithContent } from '@/widgets/ThreeDimensionScroll';

import styles from './GalleryPage.module.css';

export const GalleryPage = () => {
	return (
		<section className={styles.wrapper}>
			<ThreeDimensionScrollWithContent />
		</section>
	);
};
