const sequelize = require('../config/connection');
const { Users, Posts } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await Users.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const post of postData) {
        await Posts.create({
            ...post,
            user_id: Users[Math.floor(Math.random() * Users.length - 1)],
        });
    }

    process.exit(0);
};

seedDatabase();