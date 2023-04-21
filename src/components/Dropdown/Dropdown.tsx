import { ReactElement, useState } from 'react';
import { Typography } from 'components';
import { filterOptions } from 'helpers/filters';
import styles from './dropdown.module.css';

export interface Option {
	id: number;
	name: string;
	image: string;
	value: string;
}

export interface DropdownProps {
	options: Option[];
	onChange: (value: string) => void;
	placeholder?: string;
}

const Dropdown = ({
	options,
	placeholder,
	onChange,
}: DropdownProps): ReactElement => {
	const getFilterLocalStorage = localStorage.getItem('filter');

	const filterName = filterOptions.find(
		filter => filter.value === getFilterLocalStorage,
	)?.name;

	const [showOptionList, setShowOptionList] = useState(false);
	const [defaultSelectText, setDefaultSelectText] = useState(
		filterName || placeholder || '',
	);

	const handleListDisplay = () => {
		setShowOptionList(prevState => !prevState);
	};

	const handleOptionClick = (value: string, name: string) => {
		setDefaultSelectText(name);
		onChange(value);
		setShowOptionList(false);
	};

	return (
		<div>
			<div className={styles.container}>
				<div
					data-testid="dropdown-component"
					onClick={handleListDisplay}
					className={
						showOptionList
							? `${styles.selectedText} active`
							: styles.selectedText
					}
				>
					<Typography data-testid="selected-option" type="textStyle4">
						{defaultSelectText}
					</Typography>
				</div>
				{showOptionList && (
					<ul className={styles.selectOptions}>
						{options.map(option => {
							return (
								<li
									key={option.id}
									className={styles.option}
									onClick={() => {
										handleOptionClick(option.value, option.name);
									}}
								>
									<div className={styles.optionContainer}>
										<img
											src={option.image}
											alt={option.name}
											className={styles.image}
										/>
										<Typography type="textStyle4">
											{option.name}
										</Typography>
									</div>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Dropdown;
