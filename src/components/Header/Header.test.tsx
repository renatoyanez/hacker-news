import React from 'react';
import { create } from 'react-test-renderer';
import { render } from '@testing-library/react';
import Header, { HeaderProps } from './Header';
import { Typography } from 'components';

const text = 'Header title';

const Title = () => <Typography>{text}</Typography>;

const props: HeaderProps = { title: <Title /> };

describe('Header', () => {
	it('renders correctly', () => {
		const tree = create(<Header {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders with props', async () => {
		const { getByText } = render(<Header {...props} />);

		const placeholder = getByText(text);
		expect(placeholder).toBeTruthy();
	});
});
