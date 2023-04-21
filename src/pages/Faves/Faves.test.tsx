import React from 'react';
import { Router as MemRouter } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { createMemoryHistory } from 'history';
import { RouteList } from 'routes';
import Faves from './Faves';

afterEach(cleanup);

describe('Faves', () => {
	const history = createMemoryHistory({
		initialEntries: [RouteList.FAVES],
	});

	it('renders correctly', () => {
		const tree = create(
			<MemRouter location={history.location} navigator={history}>
				<Faves />
			</MemRouter>,
		).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
