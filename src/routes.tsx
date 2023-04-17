import { ReactElement } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Faves, Home } from 'pages';

type RouteListType = {
	HOME: string;
	FAVES: string;
};

export const RouteList: RouteListType = {
	HOME: '/',
	FAVES: '/faves',
};

const Routes = (): ReactElement => {
	return (
		<Switch>
			<Route path={RouteList.HOME} element={<Home />} />
			<Route path={RouteList.FAVES} element={<Faves />} />
			{/* <Route path="*" element={<NotFound />} /> */}
		</Switch>
	);
};

export default Routes;
