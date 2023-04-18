import React from 'react';
import { useNavigate } from 'react-router';

interface Elements {
	title: string;
	path: string;
}

interface TabsProps {
	data: Elements[];
}

const Tabs = ({ data }: TabsProps) => {
	const navigate = useNavigate();

	return (
		<div>
			{data.map(item => {
				return (
					<button
						key={item.title}
						onClick={() => navigate(item.path)}
					>
						{item.title}
					</button>
				);
			})}
		</div>
	);
};

export default Tabs;
