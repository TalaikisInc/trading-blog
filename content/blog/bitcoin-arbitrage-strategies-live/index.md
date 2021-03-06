---
title: Bitcoin arbitrage trading strategies are now live
date: "2020-04-15"
image: https://arb-images.talaikis.com/arb-3-reinvested.png
description: Bitcoin arbitrage trading strategies are live.
tags: ["arbitrage", "trading", "bitcoin"]
---

I have released daily Bitcoin arbitrage strategies on an API. Currently there are slightly more than a hundred of them, all of them use one algorithm.

![Example performance](https://arb-images.talaikis.com/arb-3-reinvested.png "Example performance")

- [Performance](/arbitrage-performance)
- [Subscribe](https://rapidapi.com/talaikis.tadas/api/bitcoin-arbitrage/pricing)

Below are information on how to request and use Bitcoin arbitrage stategies.

## Exchanges on API

And some benefits if you register through the following links:

- [Bitfinex](https://www.bitfinex.com/?refcode=yCM0z_QCi)
- [Kraken](https://www.kraken.com/)
- [Binance](https://www.binance.com/)
- [Kucoin](https://www.kucoin.com/?rcode=JhPJxv)
- [Gate.io](https://www.gate.io/ref/2867373)
- [CoinEx](https://www.coinex.com/register?refer_code=n68zq) - 0.02% lower commission for 1 month
- [OKEX](https://www.okex.com/join/1899267) - $10

## Cryptocurrencies

- BTC vs. USD/ USDT
- ETH vs. USD/ USDT
- XRP vs. USD/ USDT

## Endpoints

Base URL:

- https://bitcoin-arbitrage.p.rapidapi.com/v1.0

* Map of arbitrage strategies: "/info/strategies"
* Signals: "/signals/{strategyId}"
* Statistics: "/stats/{strategyId}"
* Daily returns: "/returns-daily/{strategyId}"
* Weekly returns: "/returns-weekly/{strategyId}"
* Monthly returns: "/returns-monthly/{strategyId}"
* Yearly returns: "/returns-yearly/{strategyId}"
* Fees used: "/info/fees"
* MAE: "/mae/{strategyId}"
* MFE: "/mfe/{strategyId}"

Note. There will be no last signals endpoint for the Bitcoin arbitrage strategies.

## Signals API explanation

API response explanation for arbitrage strategies:

```json
{ "1586822400000": {
    "date":"2020-04-14",
    "signal_1": 1,
    "signal_2": -1,
    "returns": -0.1900094008,
    "cumulative": 370.7507459281,
    "reinvested": 1572.5214156334,
    "drawdown": -1.0331739172,
    "limit_1":6867.126,
    "limit_2":6899.22112,
    "limit_1_mod":6864.446,
    "limit_2_mod": 6901.29212
  }
}
```

* "signal_1" - signal for first exchange for tomorrow
* "signal_2" - signal for second exchange for tomorrow
* "returns" - returns for yesterday for the strategy
* "cumulative" - cumulative returns up to this trade
* "reinvested" - cumulative reinvested returns up to this trade
* "drawdown" - current drawdown
* "limit_1" - limit price for first exchange
* "limit_2" - limit price for second exchange

Note, this response is unified with returns. Actual response includes only signals, without the returns to save on data transfer. Daily returns are available on a separate endpoint.

## Map of strategies

Strategy map will show what the strategy trades. For example:

```json
{
  "name": "arb-12",
  "exchange_1": "Binance",
  "exchange_2": "HuobiPro",
  "base_1": "BTC",
  "quote_1": "USD",
  "base_2": "BTC",
  "quote_2": "USDT"
}
```

* "name" - strategy ID
* "exchange_1" - first exchange
* "exchange_2" - second exchange
* "base_1" - symbol for the first exchange 
* "quote_1" - quote currency for the first exchange 
* "base_2" - symbol for the second exchange 
* "quote_2" - quote currency for the second exchange 

## Fees

Fees are important for arbitrage strategies, so you can never exceed defined values.

Example:

```json
"Bitfinex": {
  "trade": 0.001,
  "margin": {
    "rate": 0.1,
    "markup": 0.15,
    "type": "constant"
  }
}
```

* "trade" - trade open and close fee in decimal percent (x 100, so 0.001 is 0.1%)
* "margin" - yearly funding rates in decimal percent
* "markup" - if "type" is "constant", then markup is just addition to the rate, if "type" is "onOpen", then "markup" is additional rate on position open to the yearly rate

## Example of the trading process

1. You have accounts on Binance and HuobiPro
2. You want to trade BTC
3. You choose the strategy from the map of the arbitrage strategies, which has those exchanges and symbols: "arb-12"
4. Then you request the arbitrage signals for "arb-12" when they are generated (0:03 GMT) and trade on "signal_1" for the first exchange and "signal_2" on the second exchange

## On fees and short trading

Every exchange has different rules for margin trading, so fees used are approximate.

As you first need to borrow the instrument and liquidity may be limited, preferably you need to establish the short exchange position first and long - second, having as little lag as possible between them.

## Signal generation time

Signals are (currently) generated each day 0:01-0:03 GMT, so you can start requesting them at 0:03 GMT.
