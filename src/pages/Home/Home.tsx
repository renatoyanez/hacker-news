import React from 'react';
import { useNavigate } from 'react-router';
import { RouteList } from '../../routes';
import styles from 'styles/App.module.css';

const Home = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.app}>
			<p className={styles.textStyle2}>Hacker news</p>
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
