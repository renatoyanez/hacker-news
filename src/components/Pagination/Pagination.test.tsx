import React from 'react';
import { create } from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import Pagination, { PaginationProps } from './Pagination';

const props: PaginationProps = {
	currentPage: 1,
	lastPage: 9,
	maxLength: 9,
	setCurrentPage: jest.fn(),
};

describe('Pagination', () => {
	it('renders correctly', () => {
		const tree = create(<Pagination {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('calls on change when clicked', () => {
		const mockClick = jest.fn();
		const { getByText, queryAllByTestId } = render(
			<Pagination {...props} setCurrentPage={mockClick} />,
		);
		const button = getByText(/1/i);
		fireEvent.click(button);

		const numberOfPage = queryAllByTestId(
			'number-of-page',
		) as Element[];

		expect(numberOfPage[0]).toHaveClass('pageLink active');

		expect(mockClick).toHaveBeenCalledTimes(1);
	});

	it('calls on change multiple times', () => {
		const mockClick = jest.fn();
		const component = render(
			<Pagination {...props} setCurrentPage={mockClick} />,
		);
		const button1 = component.getByText(/1/i);
		const button2 = component.getByText(/2/i);
		const button3 = component.getByText(/3/i);
		const button4 = component.getByText(/4/i);

		fireEvent.click(button1);
		fireEvent.click(button3);
		fireEvent.click(button2);
		fireEvent.click(button4);

		expect(mockClick).toHaveBeenCalledTimes(4);
	});
});
