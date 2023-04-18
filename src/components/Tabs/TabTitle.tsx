import { useCallback } from 'react';
import styles from './tabs.module.css';

export type TabTitleProps = {
	title: string;
	index: number;
	setSelectedTab: (index: number) => void;
	isActive?: boolean;
};

const TabTitle = (props: TabTitleProps): JSX.Element => {
	const { title, setSelectedTab, index, isActive } = props;

	const handleOnClick = useCallback(() => {
		setSelectedTab(index);
	}, [setSelectedTab, index]);

	return (
		<li className={`${styles.title} ${isActive ? 'active' : ''}`}>
			<button onClick={handleOnClick}>{title}</button>
		</li>
	);
};

export default TabTitle;
