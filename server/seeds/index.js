const connectToDatabase = require('../config/connection');
const { User, Car, Booking } = require('../models');
const { seedCars } = require('./cars');
const { seedUsers } = require('./users');
// const { seedBookings } = require('./bookings');

const clearCollections = async () => {
	await User.deleteMany({});
	await Car.deleteMany({});
	// await Booking.deleteMany({});
};

connectToDatabase.once('open', async () => {

	try {
		// clear all collections
		await clearCollections();
	
		// seed users
		await seedUsers();
	
		// // seed Cars
		await seedCars();
	
		// // seed bookings
		// await seedBookings();
	} catch (error) {
		console.log(`[ERROR]: Failed to seed DB | ${error.message}`);
	}
	
	process.exit(0);
})

