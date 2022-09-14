const { Car } = require('../models');

const cars = [
	{
		make: 'Audi',
		model: 'Q5',
		imageUrl:
			'https://images.unsplash.com/photo-1621349337628-d4f1c1a24114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXVkaSUyMHE1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		dailyPrice: 144.59,
		weeklyPrice: 800,
		specifications: {
			seats: 5,
			doors: 5,
			transmission: 'automatic',
			suitCases: 2,
			ac: true,
			satNav: true,
			similiar: 'Audi Q5 Aut. or Similar | Premium SUV',
		},
	},
	{
		make: 'BMW',
		model: 'X3',
		imageUrl:
			'https://images.unsplash.com/photo-1605437139441-590d3a529b08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8eDN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		dailyPrice: 127.99,
		weeklyPrice: 639.95,
		specifications: {
			seats: 5,
			doors: 5,
			transmission: 'automatic',
			suitCases: 1,
			ac: true,
			satNav: true,
			similiar: 'BMW X3 Aut. or Similar | Premium SUV',
		},
	},
	{
		make: 'Mercedes-Benz',
		model: 'E-Class Estate',
		imageUrl:
			'https://images.unsplash.com/photo-1652453822986-04f70788b118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGUlMjBjbGFzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		dailyPrice: 145,
		weeklyPrice: 725,
		specifications: {
			seats: 5,
			doors: 5,
			transmission: 'automatic',
			suitCases: 3,
			ac: true,
			satNav: true,
			similiar:
				'Mercedez-Benz E-class Estate Aut. or Similar | Premium Estate',
		},
	},
	{
		make: 'kia',
		model: 'Ceed',
		imageUrl:
			'https://images.unsplash.com/photo-1602830364184-bcb58aa7d374?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGtpYSUyMGNlZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		dailyPrice: 57,
		weeklyPrice: 285,
		specifications: {
			seats: 5,
			doors: 5,
			transmission: 'Manual',
			suitCases: 2,
			ac: true,
			satNav: false,
			similiar:
				'Kia Ceed, Citroen C3 Aircross, skoda Fabia or Similar | Saloon',
		},
	},
	{
		make: 'BMW',
		model: '1 Series',
		imageUrl:
			'https://images.unsplash.com/photo-1624720706089-7fe0605e360b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8MSUyMHNlcmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		dailyPrice: 93.99,
		weeklyPrice: 469.95,
		specifications: {
			seats: 5,
			doors: 5,
			transmission: 'Manual',
			suitCases: 1,
			ac: true,
			satNav: false,
			similiar: 'BMW 1 Series, Audi Q2 or Similar | Premium Saloon',
		},
	},
	{
		make: 'BMW',
		model: '3 Series',
		imageUrl:
			'https://images.unsplash.com/photo-1643793019410-b6ff1112da9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzI5fHxtM3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		dailyPrice: 110,
		weeklyPrice: 550,
		specifications: {
			seats: 5,
			doors: 5,
			transmission: 'Automatic',
			suitCases: 2,
			ac: true,
			satNav: false,
			similiar:
				'BMW 3 Series Aut., Mercedes-Benz C-Class Aut. or Similar | Premium Saloon',
		},
	},
	{
		make: 'Audi',
		model: 'A5',
		imageUrl:
			'https://images.unsplash.com/photo-1637051380818-9f41c385ac67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGF1ZGklMjBhNXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		dailyPrice: 138,
		weeklyPrice: 690,
		specifications: {
			seats: 5,
			doors: 5,
			transmission: 'Automatic',
			suitCases: 2,
			ac: true,
			satNav: true,
			similiar:
				'Audi A5 Aut., Mercedes-Benz E-Class Aut. or Similar | Premium Saloon',
		},
	},
	{
		make: 'Audi',
		model: 'A1',
		imageUrl:
			'https://images.unsplash.com/photo-1555953329-93068bea8859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXVkaSUyMGExfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		dailyPrice: 71,
		weeklyPrice: 355,
		specifications: {
			seats: 4,
			doors: 2,
			transmission: 'Manual',
			suitCases: 1,
			ac: true,
			satNav: false,
			similiar: 'Audi A1 or Similar | Premium Saloon',
		},
	},
	{
		make: 'Citroen',
		model: 'C5 Aircross',
		imageUrl:
			'https://images.unsplash.com/photo-1520581846907-e43a2c1c930b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0cm9lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		dailyPrice: 88,
		weeklyPrice: 440,
		specifications: {
			seats: 5,
			doors: 5,
			transmission: 'Manual',
			suitCases: 2,
			ac: true,
			satNav: false,
			similiar: 'Citroen C5 Aircross or Similar | Saloon',
		},
	},
	{
		make: 'Mercedes-Benz',
		model: 'GLE',
		imageUrl:
			'https://images.unsplash.com/photo-1577615792595-d38014354328?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		dailyPrice: 166.49,
		weeklyPrice: 832.45,
		specifications: {
			seats: 5,
			doors: 5,
			transmission: 'Automatic',
			suitCases: 3,
			ac: true,
			satNav: true,
			similiar: 'Mercedes-Benz GlE SUV Aut. or similar | Premium SUV',
		},
	},
	{
		make: 'Mini',
		model: '5 door',
		imageUrl:
			'https://images.unsplash.com/photo-1600016325934-f6e4100c921a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1pbmklMjBjb29wZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		dailyPrice: 100,
		weeklyPrice: 500,
		specifications: {
			seats: 4,
			doors: 2,
			transmission: 'Automatic',
			suitCases: 1,
			ac: true,
			satNav: false,
			similiar:
				'Mini 5 Door Aut., Audi A1 Aut. or similar | Premium Saloon',
		},
	},
	{
		make: 'Renault',
		model: 'Clio',
		imageUrl:
			'https://images.unsplash.com/photo-1622653902334-ae450576f128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxyZW5hdWx0JTIwY2xpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
		dailyPrice: 58,
		weeklyPrice: 290,
		specifications: {
			seats: 4,
			doors: 2,
			transmission: 'Automatic',
			suitCases: 1,
			ac: true,
			satNav: false,
			similiar:
				'Mini 5 Door Aut., Audi A1 Aut. or similar | Premium Saloon',
		},
	},
	{
		make: 'volkswagen',
		model: 'Transporter',
		imageUrl:
			'https://images.unsplash.com/photo-1623835176016-bcaf8bca4a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHx2b2xrc3dhZ2VuJTIwdmFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		dailyPrice: 50,
		weeklyPrice: 200,
		specifications: {
			seats: 3,
			doors: 2,
			transmission: 'Manual',
			suitCases: 20,
			ac: false,
			satNav: false,
			similiar:
				'VW Transporter., Ford Transit Custom or similar | Delivery vans',
		},
	},
	{
		make: 'Ford',
		model: 'Tourrneo',
		imageUrl:
			'https://images.unsplash.com/photo-1612390729739-9115a36a7045?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGZvcmQlMjB2YW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		dailyPrice: 200,
		weeklyPrice: 1000,
		specifications: {
			seats: 9,
			doors: 5,
			transmission: 'Automatic',
			suitCases: 3,
			ac: false,
			satNav: true,
			similiar:
				'Ford Tourneo Custom 9 Seater Aut., VW Shuttle 9 Seater Aut. or similar | Mini Bus',
		},
	},
];
const seedCars = async () => {
	await Car.insertMany(cars);

	console.log('[INFO]: Successfully seeded cars');
};

module.exports = { seedCars };
