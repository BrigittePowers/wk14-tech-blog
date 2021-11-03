const { User } = require('../models');

const userData = [
	{
		username: 'Brigitte',
		password: 'Powers',
	},
	{
		username: 'Tori',
		password: 'Higgins',
	},
	{
		username: 'Minnie',
		password: 'Delgado',
	},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
