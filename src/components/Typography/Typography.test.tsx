import React from 'react';
import { create } from 'react-test-renderer';
import Typography from './Typography';

test('Typography renders correctly', () => {
	const tree = create(
		<Typography type="textStyle2">test</Typography>,
	).toJSON();
	expect(tree).toMatchSnapshot();
});
