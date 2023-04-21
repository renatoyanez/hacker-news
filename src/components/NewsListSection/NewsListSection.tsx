import { ReactElement } from 'react';
import { IHits } from 'interfaces';
import { Card } from 'components';
import { useFaveNewsContext } from 'context/favesContext';
import styles from './newsListSection.module.css';

export interface NewsListSectionProps {
	news?: IHits[];
}

const NewsListSection = ({
	news,
}: NewsListSectionProps): ReactElement => {
	const { favedHits } = useFaveNewsContext();

	const likedOnes =
		news &&
		favedHits &&
		news
			.filter(product =>
				favedHits.some(item => item.objectID === product.objectID),
			)
			.map(el => el.objectID);

	return (
		<div>
			<section className={styles.cards}>
				{news && news?.length
					? news?.map((item, index) => {
							if (
								!item.created_at ||
								!item.author ||
								!item.story_title ||
								!item.story_url
							) {
								return;
							}
							const liked = likedOnes?.find(
								objectID => objectID === item.objectID,
							);
							return (
								<Card
									key={`${index}-${item.created_at}`}
									hit={item}
									liked={Boolean(liked)}
								/>
							);
					  })
					: null}
			</section>
		</div>
	);
};

export default NewsListSection;
