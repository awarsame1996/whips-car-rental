require('dotenv').config();

const { ApolloServer } = require('apollo-server-express');

const connectToDatabase = require('./config/connection');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { authMiddleware } = require('./context/auth');
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 4000;
const app = express();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const init = async () => {
	await server.start();
	server.applyMiddleware({ app });

	connectToDatabase.once('open', () => {
		app.listen(PORT, () => {
			console.log(`API server running on port ${PORT}!`);
			console.log(
				`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
			);
		});
	});
};

init();
