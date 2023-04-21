import { ReactNode } from 'react';
import styles from './typography.module.css';

interface TypographyProps {
	children?: ReactNode | ReactNode[];
	type?: string;
}

const Typography = ({
	type = 'textStyle',
	children,
}: TypographyProps) => {
	return (
		<>
			<p className={styles[type]}>{children}</p>
		</>
	);
};

export default Typography;
