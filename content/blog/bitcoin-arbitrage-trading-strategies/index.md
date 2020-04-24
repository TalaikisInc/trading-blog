---
title: Introducing Bitcoin arbitrage trading strategies
date: "2020-04-03"
image: https://blue-images.talaikis.com/arb-1-returns.png
description: Ins and outs for Bitcoin arbitrage trading strategies.
tags: ["arbitrage", "trading", "bitcoin"]
---

Our arbitrage strategies usually will probably be always invested, price arbitrage strategies between two exchanges.

![Bitcoin arbitrage strategy](https://blue-images.talaikis.com/arb-1-returns.png "Bitcoin arbitrage strategy")

Exact details yet to be defined.

## Trading signals API

API response explanation for arbitrage strategies:

```json

{ "1585612800000": {
    "date": "2020-03-31",
    "signal_1": -1,
    "signal_2": 1,
    "limit_1": 6448.2453,
    "limit_2": 6435.0585
}
```

* "signal_1" - signal for first exchange for tomorrow
* "signal_2" - signal for second exchange for tomorrow
* "limit_1" - limit price for first exchange
* "limit_2" - limit price for second exchange
