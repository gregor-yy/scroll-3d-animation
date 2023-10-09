import { ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, Video } from '@/shared/assets';
import { classNames } from '@/shared/lib';
import { ThreeDimensionScroll } from '../ThreeDimensionScroll';
import { IFrame } from '../../lib';

import styles from './ThreeDimensionScrollWithContent.module.css';

// HOC for transmitting content to the ThreeDimensionScroll component

interface WithContentProps {
	frames: IFrame[];
}

const frames: IFrame[] = [
	{
		id: 1,
		content: (
			<div className={styles.frameContent}>
				<h2>Beatiful World</h2>
			</div>
		),
	},
	{
		id: 2,
		content: (
			<div className={styles.frameContent}>
				<div className={classNames(styles.frameSection, styles.frameSectionVertical, styles.frameSectionLeft)}>
					<img src={ImageOne} />
				</div>
			</div>
		),
	},
	{
		id: 3,
		content: (
			<div className={classNames(styles.frameContent, styles.shadow)}>
				<div className={classNames(styles.frameSection, styles.frameSectionHorizontal, styles.frameSectionRight)}>
					<video src={Video} autoPlay muted loop />
				</div>
			</div>
		),
	},
	{
		id: 4,
		content: <></>,
	},
	{
		id: 5,
		content: (
			<div className={styles.frameContent}>
				<div className={classNames(styles.frameSection, styles.frameSectionVertical, styles.frameSectionRight)}>
					<div className={styles.frameText}>
						<h3>Pure planet</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis, totam rerum est suscipit dolor
							repellat consequuntur ad vel maiores iure nisi odit voluptate eos soluta facilis, assumenda voluptatem
							saepe?
						</p>
					</div>
				</div>
			</div>
		),
	},
	{
		id: 6,
		content: (
			<div className={classNames(styles.frameContent, styles.shadow)}>
				<div className={classNames(styles.frameSection, styles.frameSectionVertical, styles.frameSectionLeft)}>
					<img src={ImageTwo} />
				</div>
			</div>
		),
	},
	{
		id: 7,
		content: <></>,
	},
	{
		id: 8,
		content: (
			<div className={classNames(styles.frameContent, styles.shadow)}>
				<div className={classNames(styles.frameSection, styles.frameSectionVertical, styles.frameSectionRight)}>
					<img src={ImageThree} />
				</div>
			</div>
		),
	},

	{
		id: 10,
		content: <></>,
	},
	{
		id: 11,
		content: (
			<div className={styles.frameContent}>
				<div className={classNames(styles.frameSection, styles.frameSectionVertical, styles.frameSectionLeft)}>
					<div className={styles.frameText}>
						<h3>Ask the mountains</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis, totam rerum est suscipit dolor
							repellat consequuntur ad vel maiores iure nisi odit voluptate eos soluta facilis, assumenda voluptatem
							saepe?
						</p>
					</div>
				</div>
			</div>
		),
	},
	{
		id: 12,
		content: (
			<div className={classNames(styles.frameContent, styles.shadow)}>
				<div className={classNames(styles.frameSection, styles.frameSectionVertical, styles.frameSectionRight)}>
					<img src={ImageFour} />
				</div>
			</div>
		),
	},
	{
		id: 13,
		content: <></>,
	},
	{
		id: 14,
		content: (
			<div className={classNames(styles.frameContent, styles.shadow)}>
				<div className={classNames(styles.frameSection, styles.frameSectionHorizontal, styles.frameSectionLeft)}>
					<video src={Video} autoPlay muted loop />
				</div>
			</div>
		),
	},
	{
		id: 15,
		content: <></>,
	},
	{
		id: 16,
		content: (
			<div className={classNames(styles.frameContent, styles.shadow)}>
				<div className={classNames(styles.frameSection, styles.frameSectionVertical, styles.frameSectionRight)}>
					<img src={ImageFive} />
				</div>
			</div>
		),
	},
	{
		id: 17,
		content: <></>,
	},
	{
		id: 18,
		content: <></>,
	},
	{
		id: 19,
		content: (
			<div className={classNames(styles.frameContent, styles.shadow)}>
				<div className={styles.frameSection}>
					<video src={Video} autoPlay muted loop />
				</div>
			</div>
		),
	},
];

function withContent<T>(WrappedComponent: React.ComponentType<T & WithContentProps>) {
	return (props: Omit<T, keyof WithContentProps>) => {
		return <WrappedComponent frames={frames} {...(props as T)} />;
	};
}

export const ThreeDimensionScrollWithContent = withContent(ThreeDimensionScroll);
