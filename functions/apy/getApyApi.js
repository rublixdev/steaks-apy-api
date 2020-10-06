const functions = require('firebase-functions');
const admin = require('firebase-admin');
const getAllStakedValue = require('./getAllStakedValue.js');
const constants = require('../constants.js');

if (!admin.apps.length) {
  admin.initializeApp();
}

const getApyApi = functions.https.onRequest(async (request, response) => {
  const lpPair = request.query.lpPair;

  const steakStakedValue = await getAllStakedValue(constants.lpPairs.STEAK_ETH);
  const requestedStakedValue = await getAllStakedValue(lpPair);

  if (
    typeof requestedStakedValue === 'string' &&
    requestedStakedValue.indexOf('Error') !== -1
  ) {
    response.send(requestedStakedValue);
  } else {
    const apy = steakStakedValue.tokenPriceInWeth
      .times(constants.STEAK_PER_BLOCK)
      .times(constants.BLOCKS_PER_YEAR)
      .times(requestedStakedValue.poolWeight)
      .div(requestedStakedValue.totalWethValue)
      .times(100);
    response.send(apy);
  }
});

module.exports = getApyApi;
