import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
// import { render, screen } from '@testing-library/react';
import App from './App';

describe('App test', () => {
	it('App renders correctly', () => {
		const jsx = (
			<BrowserRouter>
				<App />
			</BrowserRouter>
		);
		const renderedComponent = renderer.create(jsx).toJSON();
		expect(renderedComponent).toMatchSnapshot();
	});
});
