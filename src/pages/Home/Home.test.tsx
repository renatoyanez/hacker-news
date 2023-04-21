import React from 'react';
import { Router as MemRouter } from 'react-router-dom';
import { useApi } from '../../api/api-provider';
import { getMockedApiDataPaginated } from 'test-utils/mocked-api-data';
import { render, cleanup } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { createMemoryHistory } from 'history';
import { RouteList } from 'routes';
import Home from './Home';

jest.mock('api/api-provider');
afterEach(cleanup);

describe('Home', () => {
	const promise = Promise.resolve();

	jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');
	Object.setPrototypeOf(window.localStorage.setItem, jest.fn());

	const history = createMemoryHistory({
		initialEntries: [RouteList.HOME],
	});

	it('renders correctly', () => {
		const tree = create(
			<MemRouter location={history.location} navigator={history}>
				<Home />
			</MemRouter>,
		).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('sets data to the local storage', async () => {
		jest.mock('../../api/api-provider');
		jest.mocked(useApi).mockImplementation(() => {
			return {
				news: () =>
					new Promise((resolve, _reject) =>
						resolve(getMockedApiDataPaginated()),
					),
			};
		});
		act(() => {
			render(
				<MemRouter location={history.location} navigator={history}>
					<Home />
				</MemRouter>,
			);
		});
		expect(window.localStorage.setItem).toHaveBeenCalledWith(
			'filter',
			'',
		);
		await act(() => promise);
	});
});
