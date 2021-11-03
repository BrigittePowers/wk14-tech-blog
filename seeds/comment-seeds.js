const { Comment } = require('../models');

const commentData = [
	{
		comment_text: 'Meow meow?',
		user_id: 1,
		post_id: 1,
	},
	{
		comment_text: 'Mrrrrrow!',
		user_id: 2,
		post_id: 2,
	},
	{
		comment_text: 'Meow meow meow meow meow meow meoooooow!!!',
		user_id: 3,
		post_id: 3,
	},
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
