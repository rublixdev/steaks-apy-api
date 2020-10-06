const functions = require('firebase-functions');
const admin = require('firebase-admin');
const getAllStakedValue = require('./getAllStakedValue.js');
const constants = require('../constants.js');

if (!admin.apps.length) {
  admin.initializeApp();
}

const getTVLApi = functions.https.onRequest(async (request, response) => {
  let TVL = 0;
  let wethAmountPromises = [];

  console.log('1');

  const lpPairKeys = Object.keys(constants.lpPairs);
  for (let lpPairKey of lpPairKeys) {
    console.log(lpPairKey)
    wethAmountPromises.push(getAllStakedValue(constants.lpPairs[lpPairKey]));
  }

  console.log('2');

  const wethAmounts = await Promise.all(wethAmountPromises);
  console.log('3');

  for (let wethAmount of wethAmounts) {
    if (typeof wethAmount === 'string' && wethAmount.indexOf('Error') !== -1) {
      return response.send(requestedStakedValue);
    } else {
      TVL += wethAmount;
    }
  }
  console.log('4');

  return response.send(TVL);
});

module.exports = getTVLApi;
