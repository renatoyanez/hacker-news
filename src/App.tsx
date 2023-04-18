import { ReactElement } from 'react';
import Routes from './routes';
import { Layout } from 'components';

const App = (): ReactElement => {
	return (
		<div>
			<Layout>
				<Routes />
			</Layout>
		</div>
	);
};

export default App;
