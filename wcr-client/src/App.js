import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	createHttpLink,
} from '@apollo/client';

import './App.css';
import { Navbars } from './components/navBar';
import { SignupForm } from './components/signupForm';
import { HomePage } from './containers/homePage';
import { LoginForm } from './components/loginForm';
import { VehiclesPage } from './containers/vehiclesPage';
import { SignupPage } from './containers/signupPage';
import { LoginPage } from './containers/loginPage';
import { AboutPage } from './containers/aboutPage';
import { AppProvider } from './context/AppProvider';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';

// const httpLink = createHttpLink({
// 	uri: process.env.GRAPHQL_URL || 'http://localhost:4000/',
// });

const client = new ApolloClient({
	uri: process.env.GRAPHQL_URL || 'http://localhost:4000/',
	cache: new InMemoryCache(),
});

export const App = () => {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<AppProvider>
					<Navbars></Navbars>
					<AppRoutes />
				</AppProvider>
			</BrowserRouter>
		</ApolloProvider>
	);
};
