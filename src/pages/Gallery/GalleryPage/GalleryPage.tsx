import { Frame } from '@/widgets/Frame';

import styles from './GalleryPage.module.css';

export const GalleryPage = () => {
	return (
		<section className={styles.wrapper}>
			<Frame />
			<Frame />
			<Frame />
			<Frame />
		</section>
	);
};
