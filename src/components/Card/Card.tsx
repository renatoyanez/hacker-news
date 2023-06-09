import { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import { IHits } from 'interfaces';
import { Like, Clock } from 'components/Icons';
import { Typography } from 'components';
import { useFaveNewsContext } from 'context/favesContext';
import styles from './card.module.css';

export interface CardProps {
	hit: IHits;
	liked?: boolean;
}

const Card = ({ hit, liked }: CardProps) => {
	const { handleFavedHits, favedHits } = useFaveNewsContext();

	const [fromDate] = useState(dayjs().to(dayjs(hit.created_at)));
	const topText = `${fromDate} by ${hit.author}`;

	return (
		<article className={styles.card}>
			<div className={styles.cardContent}>
				<div className={styles.infoSection}>
					<a
						href={hit.story_url}
						target="_blank"
						style={{ textDecoration: 'none' }}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<div style={{ margin: '0.1rem 0.5rem 0 0' }}>
								<Clock />
							</div>
							<Typography type="textStyle6">{topText}</Typography>
						</div>
						<Typography type="textStyle3">
							{hit.story_title}
						</Typography>
					</a>
				</div>

				<div
					data-testid="like-icon"
					onClick={() =>
						handleFavedHits(hit, favedHits || ([] as IHits[]))
					}
					className={styles.likeSection}
				>
					<Like filled={liked} />
				</div>
			</div>
		</article>
	);
};

export default Card;
