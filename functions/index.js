const getApyApi = require('./apy/getApyApi.js');
const getStakedEthApi = require('./apy/getStakedEthApi.js');
const getTVLApi = require('./apy/getTVLApi.js');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
// // to deploy, use: firebase deploy --only functions:addMessage,functions:makeUppercase
exports.getApyApi = getApyApi;
exports.getStakedEthApi = getStakedEthApi;
exports.getTVLApi = getTVLApi;
