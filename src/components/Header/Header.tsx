import { ReactNode } from 'react';
import styles from './header.module.css';

interface HeaderProps {
	title: ReactNode | ReactNode[];
}

const Header = ({ title }: HeaderProps) => {
	return <div className={styles.header}>{title}</div>;
};

export default Header;
