import React from 'react';
import { Router as MemRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { createMemoryHistory } from 'history';
import { RouteList } from 'routes';
import Tabs, { TabsProps, Elements } from './Tabs';

const elements: Elements[] = [
	{ title: 'All', path: RouteList.HOME },
	{ title: 'My faves', path: RouteList.FAVES },
];

const props: TabsProps = {
	data: elements,
};

describe('Tabs', () => {
	const history = createMemoryHistory();

	it('renders correctly', () => {
		const tree = create(
			<MemRouter location={history.location} navigator={history}>
				<Tabs {...props} />
			</MemRouter>,
		).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('navigates when clicked', () => {
		render(
			<MemRouter location={history.location} navigator={history}>
				<Tabs {...props} />
			</MemRouter>,
		);
		fireEvent.click(screen.getByText('My faves'));
		expect(history.location.pathname).toBe(RouteList.FAVES);
	});
});
