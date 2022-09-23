require('dotenv').config();

const { ApolloServer } = require('apollo-server');

const connectToDatabase = require('./config/connection');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { authMiddleware } = require('./context/auth');
const { InMemoryLRUCache } = require('@apollo/utils.keyvaluecache');
const express = require('express');

const path = require('path');
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
}
const init = async () => {
	try {
		await connectToDatabase();

		const server = new ApolloServer({
			typeDefs,
			resolvers,
			context: authMiddleware,
			cache: new InMemoryLRUCache(),
		});

		const { url } = await server.listen(PORT);
		console.log(`Server running on ${url}`);
	} catch (error) {
		console.log(`[ERROR]: Failed to start server | ${error.message}`);
	}
};

init();
