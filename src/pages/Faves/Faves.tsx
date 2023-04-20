import React from 'react';
import { IHits } from 'interfaces';
import { NewsListSection } from 'components';

const Faves = () => {
	const faves = JSON.parse(
		localStorage.getItem('faves') as string,
	) as IHits[];

	return (
		<div>
			<NewsListSection news={faves} />
		</div>
	);
};

export default Faves;
