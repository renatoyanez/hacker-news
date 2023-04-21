import { getPaginationItems } from './helper';
import PageLink from './PageLink';
import styles from './pagination.module.css';

export interface PaginationProps {
	currentPage: number;
	lastPage: number;
	maxLength: number;
	setCurrentPage: (page: number) => void;
}

const Pagination = ({
	currentPage,
	lastPage,
	maxLength,
	setCurrentPage,
}: PaginationProps) => {
	const pageNums = getPaginationItems(
		currentPage,
		lastPage,
		maxLength,
	);

	const correctedNums = pageNums.map(num => Math.ceil(num));

	return (
		<nav className={styles.pagination} aria-label="Pagination">
			<PageLink
				disabled={currentPage === 1}
				onClick={() => setCurrentPage(currentPage - 1)}
			>
				Previous
			</PageLink>
			{correctedNums.map((pageNum, index) => {
				return (
					<PageLink
						key={index}
						data-testid="number-of-page"
						active={currentPage === pageNum}
						disabled={isNaN(pageNum)}
						onClick={() => setCurrentPage(pageNum)}
					>
						{!isNaN(pageNum) ? pageNum : '...'}
					</PageLink>
				);
			})}
			<PageLink
				disabled={currentPage === lastPage}
				onClick={() => setCurrentPage(currentPage + 1)}
			>
				Next
			</PageLink>
		</nav>
	);
};

export default Pagination;
