import { useEffect, useState } from 'react';
import { IApiError, IResponseData, IHits } from 'interfaces';
import { useApi } from 'api/api-provider';

interface IParams {
	query: string;
	page: number;
}

export const useGetNews = ({ query, page }: IParams) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);
	const [errorDetail, setErrorDetail] = useState<string>('');
	const [news, setNews] = useState<IResponseData<IHits[]>>();
	const [needFetching, setNeedFetching] = useState(false);

	const api = useApi();

	const loadNews = async () => {
		setIsLoading(true);

		await api
			.news(query, page)
			.then(response => {
				setNews(response?.data);
				setError(false);
			})
			.catch((error: IApiError) => {
				setErrorDetail(error.message);
				setError(true);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// The purpose of this useEffect bellow is to
	// avoid unnecessary re-renders when using
	// this hook. We can agree with there are other fancier
	// approaches for those side effects like memoizing,
	// however this large assessment has a deadline:
	useEffect(() => {
		if (news) {
			return;
		}
		setNeedFetching(true);
	}, [news]);

	const run = () => {
		loadNews().catch(() => setError(true));
	};

	useEffect(() => {
		if (!needFetching) return;
		run();
	}, [query, page, needFetching]);

	return {
		// loadNews,
		run,
		news,
		error,
		isLoading,
		errorDetail,
	};
};
