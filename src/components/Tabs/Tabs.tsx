import React from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { Typography } from 'components';
import styles from './tabs.module.css';

interface Elements {
	title: string;
	path: string;
}

interface TabsProps {
	data: Elements[];
}

const Tabs = ({ data }: TabsProps) => {
	const navigate = useNavigate();
	const location = useLocation();
	const pathname = location.pathname;

	const isSelected = (currentPath: string, selectedPath: string) => {
		return currentPath === selectedPath;
	};
	const handleSelect = (path: string) => {
		navigate(path);
	};

	return (
		<div>
			{data.map((item, index) => {
				return (
					<button
						key={item.title}
						onClick={() => handleSelect(item.path)}
						className={`${
							isSelected(pathname, item.path)
								? styles.selectedButton
								: styles.button
						} ${index === 0 ? styles.first : styles.second}`}
					>
						<Typography
							type={
								isSelected(pathname, item.path)
									? 'textStyle2'
									: 'textStyle5'
							}
						>
							{item.title}
						</Typography>
					</button>
				);
			})}
		</div>
	);
};

export default Tabs;
