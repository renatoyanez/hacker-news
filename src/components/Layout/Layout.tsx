import { ReactElement, ReactNode } from 'react';
import { Header, Typography, Tabs } from 'components';
import { RouteList } from 'routes';
import styles from './layout.module.css';

interface LayoutProps {
	children?: ReactNode | ReactNode[];
}

const Layout = ({ children }: LayoutProps): ReactElement => {
	return (
		<div>
			<Header title={<Typography>HACKER NEWS</Typography>} />
			<div className={styles.layout}>
				<Tabs
					data={[
						{ title: 'All', path: RouteList.HOME },
						{ title: 'My faves', path: RouteList.FAVES },
					]}
				/>
				{children}
			</div>
		</div>
	);
};

export default Layout;
