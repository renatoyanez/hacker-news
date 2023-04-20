import { createContext, useContext } from 'react';
import { IHits } from 'interfaces';

export interface IFavesContext {
	favedHits?: IHits[];
	handleFavedHits: (hit: IHits, faves: IHits[]) => void;
}

export const FaveNewsContext = createContext<IFavesContext>({
	handleFavedHits: () => {
		// handle set faves
	},
});

export const useFaveNewsContext = () => useContext(FaveNewsContext);
