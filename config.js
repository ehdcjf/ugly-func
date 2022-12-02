const dotenv = require('dotenv');
dotenv.config();

module.exports = {
        "privateKey": process.env.PRIVATE_KEY,
        "alchemyApiKey": process.env.ALCHEMY_API_KEY,
        "klaytnUrl": process.env.KLAYTN_URL,
        "klaytnPrivateKey": process.env.KLAYTN_PRIVATE_KEY,
        "klaytnPublicKey": process.env.KLYATN_PUBLIC_KEY
}