import { createContext, useContext } from 'react';
import { IHits } from 'interfaces';

export interface IFavesContext {
	favedHits?: IHits[];
	handleFavedHits: (hit: IHits, faves: IHits[]) => void;
	// runLoadNews: () => void;
}

export const FaveNewsContext = createContext<IFavesContext>({
	// runLoadNews: () => {
	// 	// update news
	// },
	handleFavedHits: () => {
		//set faves
	},
});

export const useFaveNewsContext = () => useContext(FaveNewsContext);
