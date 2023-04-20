import { ReactElement, useState, useEffect } from 'react';
import Routes from './routes';
import { FaveNewsContext } from 'context/favesContext';
import { Layout } from 'components';
import { IHits } from 'interfaces';

const App = (): ReactElement => {
	// Get local storage in the first place
	const getFavesLocalStorage = JSON.parse(
		localStorage.getItem('faves') as string,
	) as IHits[];

	// Set local storage after first render if it's not already
	useEffect(() => {
		if (!getFavesLocalStorage) {
			localStorage.setItem('faves', JSON.stringify([]));
		}
	}, []);

	const [favedHits, setFavedHits] = useState<IHits[]>(
		getFavesLocalStorage || ([] as IHits[]),
	);

	const handleFavedHits = (hit: IHits, faves: IHits[]) => {
		const found =
			faves &&
			faves.length &&
			faves.length > 0 &&
			faves.find(item => item.objectID === hit.objectID);

		if (found) {
			// Take it out if it exists
			const filtered =
				faves && faves.length && faves.length > 0
					? faves.filter(item => item.objectID !== found.objectID)
					: ([] as IHits[]);
			setFavedHits([...filtered]);
			localStorage.setItem('faves', JSON.stringify([...filtered]));
		} else {
			// Add it if it doesn't
			setFavedHits([...faves, hit]);
			localStorage.setItem('faves', JSON.stringify([...faves, hit]));
		}
	};
	return (
		<div>
			<Layout>
				<FaveNewsContext.Provider
					value={{
						favedHits,
						handleFavedHits: (hit: IHits, faves: IHits[]) => {
							handleFavedHits(hit, faves);
						},
					}}
				>
					<Routes />
				</FaveNewsContext.Provider>
			</Layout>
		</div>
	);
};

export default App;
