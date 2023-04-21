import React from 'react';
import { create } from 'react-test-renderer';
import NewsListSection, {
	NewsListSectionProps,
} from './NewsListSection';

const incrementNewsArray = (num: number) => {
	const contentArray = [];
	for (let i = 0; i < num; i++) {
		contentArray.push({
			objectID: `${i}`,
			created_at: `199${i}-${i}-${i}`,
			author: `author-${i}`,
			story_title: `title-${i}`,
			story_url: `https://www.${i}.com/`,
		});
	}
	return contentArray;
};

const props: NewsListSectionProps = {
	news: incrementNewsArray(10),
};

describe('NewsListSection', () => {
	it('renders correctly', () => {
		const tree = create(<NewsListSection {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
