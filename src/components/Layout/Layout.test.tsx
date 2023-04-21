import { ReactNode } from 'react';
import { create } from 'react-test-renderer';
import { Router as MemRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Layout from './Layout';

describe('Layout', () => {
	const child = [] as ReactNode;
	const history = createMemoryHistory();

	it('renders correctly', () => {
		const tree = create(
			<MemRouter location={history.location} navigator={history}>
				<Layout>{child}</Layout>
			</MemRouter>,
		).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
