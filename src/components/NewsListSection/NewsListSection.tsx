import { ReactNode, ReactElement } from 'react';
import styles from './newsListSection.module.css';

const NewsListSection = ({
	children,
}: {
	children?: ReactNode | ReactNode[];
}): ReactElement => {
	return (
		<div className={styles.container}>
			<section className={styles.cards}>
				<article className={styles.card}>card</article>
				<article className={styles.card}>card</article>
				<article className={styles.card}>card</article>
				<article className={styles.card}>card</article>
				<article className={styles.card}>card</article>

				{/* {children} */}
			</section>
		</div>
	);
};

export default NewsListSection;
