---
title: Bitcoin F trading strategy
date: "2020-03-01"
image: https://blueblood.talaikis.com/static/s-index.png
description: BlueBlood quantitative Bitcoin F trading strategy signals.
tags: ["trading", "strategy", "bitcoin"]
---

## What is Bitcoin F?

Bitcoin F is quantitative trading strategy in Bitcoin, which uses [quantitative trading models](/trading-philosophy) for trading decisions making.

Trading decision making model (alpha) of this strategy is based on proprietary algorithmic indicators, which uses Bitcoin returns structures and additional risk control model.

![Bitcoin F Returns](https://blue-images.talaikis.com/f-returns.png "Bitcoin F Returns")

* [More Bitcoin F stats](/performance)
* [Initial post](/introducing-bitcoin-strategies)

# Why algorithmic trading?

There are many reasons:

* Don't stare at the screen all day, don't waste time, just watch for our signals once a day
* Don't overthink your decisions - with manual trading, you can enter and exit long trades several times and then just watch market goes up and you having no position. Instead, you can just rely on our tested, machine generated signals and not think twice for when to enter into a trade
* Don't be afraid, because our risk models will show you what risk to expect and will protect you from bigger loses when you just HODL
* Be sure. Access to technology that is often accessible only to investment banks, hedge funds and quantitative traders
* Don't be left alone - if some edges will fall, and this will happen, we'll just find new ones for you to enjoy

## API Endpoint for the trading strategy

* Base URL: https://blueblood-bitcoin-trading-signals.p.rapidapi.com
* Strategy endpoint: /v1.0/signals/f
* Statistics: /v1.0/stats/f
* Yearly returns: /v1.0/returns-yearly/f
* Monthly returns: /v1.0/returns-monthly/f
* Weekly returns: /v1.0/returns-weekly/f
* MAE: /v1.0/mae/f
* MFE: /v1.0/mfe/f

or access all trading signals:

```json
/v1.0/last-signals/all
```

## API Response

Response provides the whole timeseries data for the strategy since start until recent date (today).

Example API response:

```json
{
    "1584835200000": {
        "Date": "2020-03-22",
        "signal": 0,
        "returns": 0.0,
        "cumulative": 368.3249696557,
        "drawdown":-9.4741562955,
        "limit":0.0
    },
    "1584921600000": {
        "Date": "2020-03-23",
        "signal": 1,
        "returns": 0.0,
        "cumulative": 368.3249696557,
        "drawdown": -9.4741562955,
        "limit":6199.5942
    }
}
```

Data points are indexed using Unix epoch timestamps.

* "date" - human readable date
* "signal" - signals for tomorow: > 0 - buy, < 0 - sell short, 0 - close position
* "returns" - yesterday returns in percents
* "cumulative" - cumulative stategy returns to the date in percents
* "drawdown" - drawdown for the day in percents
* "limit" - it's recommended price to buy at or below, close or sell short at or above. If you can do better than this price, your profit will be higher than stated in the rolling returns. For more, see [Exploring MAE and MFE in trading](/explaining-mae-mfe-trading)

## Fees

We calculated max 0.1% fees of Bitfinex. If you can get lower fees, then price at whcih you should buy Bitcoin can be higher by the amount you save on fees or those savings would add to your surplus profit over rolling returns.

## When signals are generated?

Signals for tomorrow are generated 0:02 (0:02 am) GMT timezone, each day.

So, when data point for "2020-03-20" shows signal = 1, it means, you should buy on "2020-03-21" at "2020-03-20" close. If you use MAE and MFE optimization, you can just place limit orders that should be valiod for the signal day ("2020-03-20" 0:02 am - "2020-03-21").

## Subscribe and start winning

- [Subsribe here](https://rapidapi.com/talaikis.tadas/api/blueblood-bitcoin-trading-signals/pricing)

## Trading strategy statistics
