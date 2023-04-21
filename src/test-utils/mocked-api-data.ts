import { IHits, INews } from 'interfaces';

export function getMockedApiDataPaginated(): INews {
	return {
		data: {
			hits: [] as IHits[],
			page: 1,
			nbPages: 1,
			hitsPerPage: 1,
			query: 'string',
		},
	};
}
