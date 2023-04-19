import { useState, ChangeEvent } from 'react';
import { Dropdown, NewsListSection } from 'components';
import { useGetNews } from 'hooks';
import angular from 'assets/images/angular-logo.jpg';
import vue from 'assets/images/vue-logo.jpg';
import react from 'assets/images/react-logo.jpg';
import styles from './home.module.css';

const Home = () => {
	const [placeholder] = useState('Select your news');

	const options = [
		{ id: 2, name: 'Angular', image: angular, value: 'Angular' },
		{ id: 3, name: 'React', image: react, value: 'React' },
		{ id: 4, name: 'Vue', image: vue, value: 'Vue' },
	];

	const [value, setValue] = useState('');

	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setValue(event.target.value);
	};
	const { news, error, isLoading } = useGetNews({
		query: 'reactjs',
		page: 3,
	});
	// console.log(value);

	return (
		<div className={styles.home}>
			<Dropdown
				options={options}
				value={value}
				placeholder={placeholder}
				onChange={handleChange}
			/>
			<NewsListSection />
		</div>
	);
};

export default Home;
