const functions = require("firebase-functions");
const admin = require("firebase-admin");
const firebaseConfig = require("./firebase.config.json");
admin.initializeApp();


exports.contract = require('./f_contract');
exports.sample = require('./f_sample')