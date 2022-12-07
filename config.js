const dotenv = require('dotenv');
dotenv.config();

module.exports = {
        "privateKey": process.env.PRIVATE_KEY,
        "alchemyApiKey": process.env.ALCHEMY_API_KEY
}