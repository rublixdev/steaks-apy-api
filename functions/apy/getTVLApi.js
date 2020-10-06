const functions = require('firebase-functions');
const admin = require('firebase-admin');
const getAllStakedValue = require('./getAllStakedValue.js');
const constants = require('../constants.js');
const BigNumber = require('bignumber.js');

if (!admin.apps.length) {
  admin.initializeApp();
}

const getTVLApi = functions.https.onRequest(async (request, response) => {
  let TVL = new BigNumber(0);
  let getAllStakedValuePromises = [
    getAllStakedValue(constants.lpPairs.HEDG_ETH),
    getAllStakedValue(constants.lpPairs.USDC_ETH),
    getAllStakedValue(constants.lpPairs.LINK_ETH),
    getAllStakedValue(constants.lpPairs.UNI_ETH),
    getAllStakedValue(constants.lpPairs.COMP_ETH),
    getAllStakedValue(constants.lpPairs.YFI_ETH),
    getAllStakedValue(constants.lpPairs.STEAK_ETH),
    getAllStakedValue(constants.lpPairs.WBTC_ETH),
    getAllStakedValue(constants.lpPairs.SNX_ETH),
    getAllStakedValue(constants.lpPairs.USDC_STEAK),
    getAllStakedValue(constants.lpPairs.WBTC_STEAK),
    getAllStakedValue(constants.lpPairs.USDC_HEDG),
    getAllStakedValue(constants.lpPairs.HEDG_STEAK),
    getAllStakedValue(constants.lpPairs.PICKLE_ETH),
    getAllStakedValue(constants.lpPairs.SUSHI_ETH),
    getAllStakedValue(constants.lpPairs.DAI_USDC),
  ];

  const stakedValues = await Promise.all(getAllStakedValuePromises);
  stakedValues.forEach((stakedValue) => {
    TVL = TVL.plus(stakedValue.wethAmount);
  });

  TVL = TVL.times(2);

  return response.send(TVL);
});

module.exports = getTVLApi;
