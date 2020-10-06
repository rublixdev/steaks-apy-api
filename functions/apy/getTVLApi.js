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

  TVL = TVL.plus((await getAllStakedValue(constants.lpPairs.HEDG_ETH)).wethAmount);
  TVL = TVL.plus((await getAllStakedValue(constants.lpPairs.USDC_ETH)).wethAmount);
  TVL = TVL.plus((await getAllStakedValue(constants.lpPairs.LINK_ETH)).wethAmount);
  TVL = TVL.plus((await getAllStakedValue(constants.lpPairs.UNI_ETH)).wethAmount);
  TVL = TVL.plus((await getAllStakedValue(constants.lpPairs.COMP_ETH)).wethAmount);
  TVL = TVL.plus((await getAllStakedValue(constants.lpPairs.YFI_ETH)).wethAmount);
  TVL = TVL.plus((await getAllStakedValue(constants.lpPairs.STEAK_ETH)).wethAmount);
  TVL = TVL.plus((await getAllStakedValue(constants.lpPairs.WBTC_ETH)).wethAmount);
  TVL = TVL.plus((await getAllStakedValue(constants.lpPairs.SNX_ETH)).wethAmount);
  TVL = TVL.plus((await getAllStakedValue(constants.lpPairs.USDC_STEAK)).wethAmount);
  TVL = TVL.plus((await getAllStakedValue(constants.lpPairs.WBTC_STEAK)).wethAmount);
  TVL = TVL.plus((await getAllStakedValue(constants.lpPairs.USDC_HEDG)).wethAmount);
  TVL = TVL.plus((await getAllStakedValue(constants.lpPairs.HEDG_STEAK)).wethAmount);
  TVL = TVL.plus((await getAllStakedValue(constants.lpPairs.PICKLE_ETH)).wethAmount);
  TVL = TVL.plus((await getAllStakedValue(constants.lpPairs.SUSHI_ETH)).wethAmount);
  TVL = TVL.plus((await getAllStakedValue(constants.lpPairs.DAI_USDC)).wethAmount);

  TVL = TVL.times(2);

  return response.send(TVL);
});

module.exports = getTVLApi;
