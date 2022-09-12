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
      <Navbars></Navbars>
      {/* <SignupForm></SignupForm> */}
      <HomePage></HomePage>
    </ApolloProvider>
  );
};
