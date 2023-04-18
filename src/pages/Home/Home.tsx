import React from 'react';
import { useNavigate } from 'react-router';
import { RouteList } from '../../routes';
import styles from './home.module.css';

const Home = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.home}>
			<button
				onClick={() => {
					navigate(RouteList.FAVES);
				}}
			>
				Faves
			</button>
		</div>
	);
};

export default Home;
