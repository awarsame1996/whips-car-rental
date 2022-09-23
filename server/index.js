require('dotenv').config();

const { ApolloServer } = require('apollo-server');

const connectToDatabase = require('./config/connection');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { authMiddleware } = require('./context/auth');
const { InMemoryLRUCache } = require('@apollo/utils.keyvaluecache');

const PORT = process.env.PORT || 4000;

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
