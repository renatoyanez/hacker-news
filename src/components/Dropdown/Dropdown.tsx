/* eslint-disable */
import {
	ReactElement,
	ChangeEvent,
	useState,
	useEffect,
} from 'react';
import { Typography } from 'components';
import styles from './dropdown.module.css';

interface Option {
	id: number;
	name: string;
	image: string;
	value?: string;
	label?: string;
}

interface DropdownProps {
	value: string;
	options: Option[];
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
	placeholder?: string;
}

const Dropdown = ({
	value,
	options,
	placeholder,
	onChange,
}: DropdownProps): ReactElement => {
	const [showOptionList, setShowOptionList] = useState(false);
	const [defaultSelectText, setDefaultSelectText] = useState(
		placeholder || '',
	);

	const [optionsList, setOptionsList] = useState<Option[]>([]);

	const handleListDisplay = () => {
		setShowOptionList(prevState => !prevState);
	};

	const handleOptionClick = (name: string) => {
		setDefaultSelectText(name);
		setShowOptionList(false);
	};

	return (
		<div>
			<div className={styles.container}>
				<div
					onClick={handleListDisplay}
					className={
						showOptionList
							? `${styles.selectedText} active`
							: styles.selectedText
					}
				>
					<Typography type="textStyle4">
						{defaultSelectText}
					</Typography>
					{/* <i className={`${styles.arrow} down`}></i> */}
				</div>
				{showOptionList && (
					<ul className={styles.selectOptions}>
						{options.map(option => {
							return (
								<li
									key={option.id}
									className={styles.option}
									onClick={() => handleOptionClick(option.name)}
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
/* eslint-disable */
