import { ReactElement } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Faves, Home } from 'pages';

type RouteListType = {
	HOME: string;
	FAVES: string;
};

export const RouteList: RouteListType = {
	HOME: '/',
	FAVES: '/my-faves',
};

const Routes = (): ReactElement => {
	return (
		<Switch>
			<Route path={RouteList.HOME} element={<Home />} />
			<Route path={RouteList.FAVES} element={<Faves />} />
		</Switch>
	);
};

export default Routes;
