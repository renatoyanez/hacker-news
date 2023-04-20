import API from './api-common';
import { INews } from 'interfaces';

export const useApi = () => {
	return {
		news: (query: string, page: number): Promise<INews> => {
			return API.get('/search_by_date', {
				params: { query, page },
			});
		},
	};
};
