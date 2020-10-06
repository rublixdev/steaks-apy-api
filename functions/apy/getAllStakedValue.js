const getAllStakedValue = async (lpPair) => {
  const constants = require('../constants.js');
  const axios = require('axios');
  const Web3 = require('web3');
  const ERC20ABI = require('../erc20abi.json');
  const MasterchefAbi = require('../masterchefAbi.json');
  const HDWalletProvider = require('@truffle/hdwallet-provider');
  const BigNumber = require('bignumber.js');

  const provider = new HDWalletProvider(
    constants.serverEthAccount.privateKey,
    constants.infuraEndpoint
  );

  const web3 = new Web3(provider);
  const getPoolWeight = async (masterChefContract, pid) => {
    const { allocPoint } = await masterChefContract.methods
      .poolInfo(pid)
      .call();
    const totalAllocPoint = await masterChefContract.methods
      .totalAllocPoint()
      .call();
    return new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint));
  };

  let primaryTokenSymbol;
  let primaryTokenContract;
  let secondaryTokenContract;
  let lpTokenContract;

  switch (lpPair) {
    //usdc
    case constants.lpPairs.USDC_STEAK:
      primaryTokenSymbol = constants.contractNames.USDC;
      lpTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.uniswapPools.USDC_STEAK
      );
      secondaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.STEAK
      );
      primaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.USDC
      );
      break;
    case constants.lpPairs.USDC_HEDG:
      primaryTokenSymbol = constants.contractNames.USDC;
      lpTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.uniswapPools.USDC_HEDG
      );
      secondaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.HEDG
      );
      primaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.USDC
      );
      break;
    case constants.lpPairs.DAI_USDC:
      primaryTokenSymbol = constants.contractNames.USDC;
      lpTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.uniswapPools.DAI_USDC
      );
      secondaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.DAI
      );
      primaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.USDC
      );
      break;

    //wbtc
    case constants.lpPairs.WBTC_STEAK:
      primaryTokenSymbol = constants.contractNames.WBTC;
      lpTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.uniswapPools.WBTC_STEAK
      );
      secondaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.STEAK
      );
      primaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.WBTC
      );
      break;

    //hedg
    case constants.lpPairs.HEDG_STEAK:
      primaryTokenSymbol = constants.contractNames.HEDG;
      lpTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.uniswapPools.HEDG_STEAK
      );
      secondaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.STEAK
      );
      primaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.HEDG
      );
      break;

    //weth
    case constants.lpPairs.HEDG_ETH:
      primaryTokenSymbol = constants.contractNames.WETH;
      lpTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.uniswapPools.HEDG_ETH
      );
      secondaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.HEDG
      );
      primaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.WETH
      );
      break;
    case constants.lpPairs.USDC_ETH:
      primaryTokenSymbol = constants.contractNames.WETH;
      lpTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.uniswapPools.USDC_ETH
      );
      secondaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.USDC
      );
      primaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.WETH
      );
      break;
    case constants.lpPairs.LINK_ETH:
      primaryTokenSymbol = constants.contractNames.WETH;
      lpTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.uniswapPools.LINK_ETH
      );
      secondaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.LINK
      );
      primaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.WETH
      );
      break;
    case constants.lpPairs.UNI_ETH:
      primaryTokenSymbol = constants.contractNames.WETH;
      lpTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.uniswapPools.UNI_ETH
      );
      secondaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.UNI
      );
      primaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.WETH
      );
      break;
    case constants.lpPairs.COMP_ETH:
      primaryTokenSymbol = constants.contractNames.WETH;
      lpTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.uniswapPools.COMP_ETH
      );
      secondaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.COMP
      );
      primaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.WETH
      );
      break;
    case constants.lpPairs.YFI_ETH:
      primaryTokenSymbol = constants.contractNames.WETH;
      lpTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.uniswapPools.YFI_ETH
      );
      secondaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.YFI
      );
      primaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.WETH
      );
      break;
    case constants.lpPairs.STEAK_ETH:
      primaryTokenSymbol = constants.contractNames.WETH;
      lpTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.uniswapPools.STEAK_ETH
      );
      secondaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.STEAK
      );
      primaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.WETH
      );
      break;
    case constants.lpPairs.LEND_ETH:
      primaryTokenSymbol = constants.contractNames.WETH;
      lpTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.uniswapPools.LEND_ETH
      );
      secondaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.LEND
      );
      primaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.WETH
      );
      break;
    case constants.lpPairs.WBTC_ETH:
      primaryTokenSymbol = constants.contractNames.WETH;
      lpTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.uniswapPools.WBTC_ETH
      );
      secondaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.WBTC
      );
      primaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.WETH
      );
      break;
    case constants.lpPairs.SNX_ETH:
      primaryTokenSymbol = constants.contractNames.WETH;
      lpTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.uniswapPools.SNX_ETH
      );
      secondaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.SNX
      );
      primaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.WETH
      );
      break;
    case constants.lpPairs.PICKLE_ETH:
      primaryTokenSymbol = constants.contractNames.WETH;
      lpTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.uniswapPools.PICKLE_ETH
      );
      secondaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.PICKLE
      );
      primaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.WETH
      );
      break;
    case constants.lpPairs.SUSHI_ETH:
      primaryTokenSymbol = constants.contractNames.WETH;
      lpTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.uniswapPools.SUSHI_ETH
      );
      secondaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.SUSHI
      );
      primaryTokenContract = new web3.eth.Contract(
        ERC20ABI,
        constants.addressMap.WETH
      );
      break;

    default:
      return (
        'Error: Liquidity Pool pair ' +
        lpPair +
        ' does not exist. Please choose one of the following: ' +
        Object.keys(constants.lpPairs).toString()
      );
  }

  const masterChefContract = new web3.eth.Contract(
    MasterchefAbi,
    constants.contractAddresses.masterChef[1]
  );

  // Get balance of the token address
  const tokenAmountWholeLP = await secondaryTokenContract.methods
    .balanceOf(lpTokenContract.options.address)
    .call();
  const tokenDecimals = await secondaryTokenContract.methods.decimals().call();
  // Get the share of lpTokenContract that masterChefContract owns
  const balance = await lpTokenContract.methods
    .balanceOf(masterChefContract.options.address)
    .call();
  // Convert that into the portion of total lpTokenContract = p1
  const totalSupply = await lpTokenContract.methods.totalSupply().call();
  // Get total weth value for the lpTokenContract = w1
  let lpContractWeth = await primaryTokenContract.methods
    .balanceOf(lpTokenContract.options.address)
    .call();

  if (primaryTokenSymbol === constants.contractNames.WBTC) {
    // lpContractWeth now store wbtc in satoshis
    const res = await axios.get(
      'https://charts.hedgetrade.com/cmc_ticker/eth?quote=USD'
    );
    const priceData = res.data;
    lpContractWeth = (lpContractWeth / 10 ** 8) * (1 / priceData.ETH.PriceBTC);
    // convert eth to weth
    lpContractWeth *= 10 ** 18;
  } else if (primaryTokenSymbol === constants.contractNames.USDC) {
    // lpContractWeth now store usdc * (10 ^ 18)
    const res = await axios.get(
      'https://charts.hedgetrade.com/cmc_ticker/eth?quote=USD'
    );
    const priceData = res.data;
    lpContractWeth = lpContractWeth / 10 ** 6 / priceData.ETH.PriceUSD;
    // convert eth to weth
    lpContractWeth *= 10 ** 18;
  } else if (primaryTokenSymbol === constants.contractNames.HEDG) {
    // lpContractWeth now store hedg
    const res = await axios.get(
      'https://charts.hedgetrade.com/cmc_ticker/hedg,eth?quote=USD'
    );
    const priceData = res.data;
    lpContractWeth =
      lpContractWeth /
      10 ** 18 /
      priceData.HEDG.PriceUSD /
      priceData.ETH.PriceUSD;
    lpContractWeth *= 10 ** 18;
  }

  // Return p1 * w1 * 2
  const portionLp = new BigNumber(balance).div(new BigNumber(totalSupply));
  const lpWethWorth = new BigNumber(lpContractWeth);
  const totalLpWethValue = portionLp.times(lpWethWorth).times(new BigNumber(2));
  // Calculate
  const tokenAmount = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals));

  const wethAmount = new BigNumber(lpContractWeth)
    .times(portionLp)
    .div(new BigNumber(10).pow(18));

  const poolWeight = await getPoolWeight(
    masterChefContract,
    constants.lpPairsPid[lpPair]
  );

  const tokenPriceInWeth = wethAmount.div(tokenAmount);

  const totalWethValue = totalLpWethValue.div(new BigNumber(10).pow(18));

  return {
    tokenAmount,
    wethAmount,
    totalWethValue: totalWethValue,
    tokenPriceInWeth: tokenPriceInWeth,
    poolWeight: poolWeight,
  };
};

module.exports = getAllStakedValue;
