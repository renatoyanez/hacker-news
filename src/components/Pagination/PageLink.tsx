import { HTMLProps } from 'react';
import { Typography } from 'components';
import styles from './pageLink.module.css';

export type Props = HTMLProps<HTMLAnchorElement> & {
	active?: boolean;
};

export default function PageLink({
	active,
	disabled,
	children,
	...otherProps
}: Props) {
	if (disabled) {
		return (
			<span
				className={`${styles.pageLink} ${
					active ? styles.active : ''
				}`}
			>
				<Typography type={active ? 'textStyle7' : 'textStyle3'}>
					{children}
				</Typography>
			</span>
		);
	}

	return (
		<a
			className={`${styles.pageLink} ${active ? styles.active : ''}`}
			aria-current={active ? 'page' : undefined}
			{...otherProps}
		>
			<Typography type={active ? 'textStyle7' : 'textStyle3'}>
				{children}
			</Typography>
		</a>
	);
}
