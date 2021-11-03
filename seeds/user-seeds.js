const { User } = require('../models');

const userData = [
	{
		username: 'Brigitte',
		password: 'Powers',
	},
	{
		username: 'Greg',
		password: 'Zaragoza',
	},
	{
		username: 'Natasha',
		password: 'Ortiz',
	},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
