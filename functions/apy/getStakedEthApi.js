const functions = require('firebase-functions');
const admin = require('firebase-admin');
const getAllStakedValue = require('./getAllStakedValue.js');

if (!admin.apps.length) {
  admin.initializeApp();
}

const getStakedEthApi = functions.https.onRequest(async (request, response) => {
  const lpPair = request.query.lpPair;

  const requestedStakedValue = await getAllStakedValue(lpPair);

  if (
    typeof requestedStakedValue === 'string' &&
    requestedStakedValue.indexOf('Error') !== -1
  ) {
    response.send(requestedStakedValue);
  } else {
    response.send(requestedStakedValue.wethAmount);
  }
});

module.exports = getStakedEthApi;
