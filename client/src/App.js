import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './App.css';
import { Navbars } from './components/navBar';

import { AppProvider } from './context/AppProvider';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';

import 'aos/dist/aos.css';
import { Footer } from './components/footer/footer';

const httpLink = createHttpLink({
	uri:
		process.env.GRAPHQL_URL || 'http://mongodb://127.0.0.1:27017/whips_db',
});

const authLink = setContext((_, { headers }) => {
	const user = JSON.parse(localStorage.getItem('user'));

	return {
		headers: {
			...headers,
			authorization: user ? `Bearer ${user.token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export const App = () => {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<AppProvider>
					<Navbars></Navbars>
					<AppRoutes />
					<Footer></Footer>
				</AppProvider>
			</BrowserRouter>
		</ApolloProvider>
	);
};
