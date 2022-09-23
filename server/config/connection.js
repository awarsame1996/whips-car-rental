// require('dotenv').config();

const mongoose = require('mongoose');

const connectToDatabase = async () => {
	try {
		const MONGDB_URI =
			process.env.MONGDB_URI || `mongodb://localhost:27017/whips_db`;

		const options = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		};

		await mongoose.connect(MONGDB_URI, options);

		console.log(`[INFO]: Successfully connected to database | `);
	} catch (error) {
		console.log(
			`[ERROR]: Failed to connect to database | ${error.message}`
		);

		throw new Error('Failed to connect to database');
	}
};
// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGDB_URI || 'mongodb://localhost/whips_db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// module.exports = mongoose.connection;

module.exports = connectToDatabase;
