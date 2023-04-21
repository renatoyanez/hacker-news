import { create } from 'react-test-renderer';
import {
	render,
	fireEvent,
	cleanup,
	screen,
} from '@testing-library/react';
import Dropdown, { DropdownProps, Option } from './Dropdown';

afterEach(cleanup);

const options: Option[] = [
	{
		id: 1,
		image: 'string',
		name: 'First',
		value: 'First',
	},
	{
		id: 2,
		image: 'string',
		name: 'Second',
		value: 'Second',
	},
];

const props: DropdownProps = {
	options,
	onChange: jest.fn(),
	placeholder: 'Placeholder',
};

describe('Dropdown Component', () => {
	it('renders correctly', () => {
		const tree = create(<Dropdown {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders placeholder when value is empty', () => {
		const { getByText } = render(<Dropdown {...props} />);
		const placeholder = getByText(props.placeholder as string);
		expect(placeholder).toBeTruthy();
	});

	it('should call onChange when the first option is selected', async () => {
		const mockedOnChange = jest.fn();
		const container = render(
			<Dropdown
				options={options}
				onChange={mockedOnChange}
				placeholder={props.placeholder}
			/>,
		);

		const dropdownComponent = container.queryByTestId(
			'dropdown-component',
		) as Element;

		expect(dropdownComponent).toBeDefined();
		expect(dropdownComponent).not.toBeNull();
		expect(mockedOnChange).toHaveBeenCalledTimes(0);

		fireEvent.click(dropdownComponent);

		fireEvent.keyDown(dropdownComponent.firstChild as Element, {
			key: 'ArrowDown',
		});

		expect(screen.getAllByText('First')[0]).toBeInTheDocument();

		await fireEvent.click(container.getAllByText('First')[0]);

		const selectedText = container.getByText(
			props.options[0].name as string,
		);
		expect(selectedText).toBeTruthy();
		expect(mockedOnChange).toHaveBeenCalledTimes(1);
	});

	it('should call onChange when multiple options are selected', async () => {
		const mockedOnChange = jest.fn();
		const container = render(
			<Dropdown
				options={options}
				onChange={mockedOnChange}
				placeholder={props.placeholder}
			/>,
		);

		const dropdownComponent = container.queryByTestId(
			'dropdown-component',
		) as Element;

		expect(dropdownComponent).toBeDefined();
		expect(dropdownComponent).not.toBeNull();
		expect(mockedOnChange).toHaveBeenCalledTimes(0);

		fireEvent.click(dropdownComponent);
		expect(screen.getAllByText('Second')[0]).toBeInTheDocument();

		await fireEvent.click(container.getAllByText('Second')[0]);

		expect(screen.getAllByText('Second')[0]).toBeInTheDocument();

		fireEvent.keyDown(dropdownComponent.firstChild as Element, {
			key: 'ArrowDown',
		});

		fireEvent.click(dropdownComponent);
		await fireEvent.click(container.getAllByText('First')[0]);

		expect(screen.getAllByText('First')[0]).toBeInTheDocument();
		expect(mockedOnChange).toHaveBeenCalledTimes(2);
	});
});
