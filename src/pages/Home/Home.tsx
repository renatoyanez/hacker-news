import { useState, useEffect, useMemo } from 'react';
import { Dropdown, NewsListSection, Pagination } from 'components';
import { useGetNews } from 'hooks';
import { IHits } from 'interfaces';
import { filterOptions } from 'helpers/filters';
import styles from './home.module.css';

const Home = () => {
	// Get local storage in the first place
	const getFilterLocalStorage = localStorage.getItem('filter');
	// Set local storage after first render if it's not already
	useEffect(() => {
		if (!getFilterLocalStorage) {
			localStorage.setItem('filter', '');
		}
	}, []);

	const [placeholder] = useState('Select your news');
	const [page, setPage] = useState(1);
	const [query, setQuery] = useState(getFilterLocalStorage || '');
	const [numberOfPages, setNumberOfPages] = useState(0);

	const handlePages = (updatePage: number) => setPage(updatePage);

	const handleQueryChange = (value: string) => {
		localStorage.setItem('filter', value);
		setQuery(value);
	};
	const { news, error, isLoading } = useGetNews({
		query,
		page,
	});

	const computeNews = useMemo(
		() =>
			news?.hits.map(hit => {
				return {
					objectID: hit.objectID,
					created_at: hit.created_at,
					author: hit.author,
					story_title: hit.story_title,
					story_url: hit.story_url,
				};
			}),
		[news?.hits],
	);

	useEffect(() => {
		if (news) {
			setNumberOfPages(news?.nbPages);
		}
	}, [news]);

	return (
		<div className={styles.home}>
			{!error ? (
				<>
					<Dropdown
						options={filterOptions}
						placeholder={placeholder}
						onChange={handleQueryChange}
					/>
					<div style={{ marginBottom: '2.375rem' }} />
					{!isLoading ? (
						<>
							<NewsListSection
								news={computeNews || ([] as IHits[])}
							/>
							<Pagination
								currentPage={page}
								lastPage={numberOfPages}
								maxLength={10}
								setCurrentPage={handlePages}
							/>
						</>
					) : (
						<div>Loading...</div>
					)}
				</>
			) : (
				<div>Error</div>
			)}
		</div>
	);
};

export default Home;
