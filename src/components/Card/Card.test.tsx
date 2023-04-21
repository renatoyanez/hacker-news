import { ReactNode } from 'react';
import { create } from 'react-test-renderer';
import { render } from '@testing-library/react';
import { IHits } from 'interfaces';
import Card, { CardProps } from './Card';

const hit: IHits = {
	objectID: '123',
	created_at: '1995-01-01',
	author: 'Author',
	story_title: 'the title',
	story_url: 'https://www.google.com/',
};

const basicProps: CardProps = {
	hit: {} as IHits,
	liked: false,
};

const props: CardProps = {
	hit: hit,
	liked: false,
};

describe('Card', () => {
	it('renders correctly', () => {
		const tree = create(<Card {...basicProps} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders with props', async () => {
		const { getByText } = render(<Card {...props} />);

		const placeholder = getByText(props.hit.story_title);
		expect(placeholder).toBeTruthy();
	});
});
