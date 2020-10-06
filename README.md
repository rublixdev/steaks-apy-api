# REST API

The REST API to Steak Finance is described below.

## Get Liquidity Pool Pair APY %

### Request

`GET /getApyApi?lpPair=[someLpPair]`

    curl -i -H 'Accept: application/json' https://us-central1-steak-finance.cloudfunctions.net/getApyApi?lpPair=[someLpPair]

    Available Liquidity Pool Pairs (lpPair):
        HEDG_ETH
        USDC_ETH
        LINK_ETH
        UNI_ETH
        COMP_ETH
        YFI_ETH
        STEAK_ETH
        WBTC_ETH
        SNX_ETH
        USDC_STEAK
        WBTC_STEAK
        USDC_HEDG
        HEDG_STEAK
        PICKLE_ETH
        SUSHI_ETH
        DAI_USDC

### Response

    HTTP/1.1 200 OK
    Date: Mon, 05 Oct 2020 12:36:30 EDT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 25

    "98.06240731446859464684"


## Get Staked Value in ETH

### Request

`GET /getStakedEthApi?lpPair=[someLpPair]`

    curl -i -H 'Accept: application/json' https://us-central1-steak-finance.cloudfunctions.net/getStakedEthApi?lpPair=[someLpPair]

    Available Liquidity Pool Pairs (lpPair):
        HEDG_ETH
        USDC_ETH
        LINK_ETH
        UNI_ETH
        COMP_ETH
        YFI_ETH
        STEAK_ETH
        WBTC_ETH
        SNX_ETH
        USDC_STEAK
        WBTC_STEAK
        USDC_HEDG
        HEDG_STEAK
        PICKLE_ETH
        SUSHI_ETH
        DAI_USDC

### Response

    HTTP/1.1 200 OK
    Date: Mon, 05 Oct 2020 12:36:30 EDT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 25

    "51.10837933522912652689"
