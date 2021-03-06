---
title: Introducing Bitcoin Strategies
date: "2020-03-11"
image: https://blue-images.talaikis.com/idx-returns.png
description: Quantitative bitcoin trading strategies API will soon be live.
tags: ["bitcoin", "strategy", "statistics"]
---

## Strategies

* [Bitcoin One](#one)
* [Bitcoin One 2.0](#one2)
* [Bitcoin F](#f)
* [Bitcoin S](#sk)
* [Bitcoin S 2.0](#s2)
* [Bitcoin S 3.0](#s3)
* [Bitcoin Pi](#pi)
* [Bitcoin Pi 2.0](#pi2)
* [Portfolio of strategies](#idx)

All strategies are based on quantitative alpha models.

### API response

Example of an API response:

```json
{ "1586476800000": {
  "date": "2020-04-10",
  "signal": 1,
  "returns": 0.0,
  "cumulative": 247.3032370321,
  "drawdown": 0.0,
  "limit": 6868.6245
}
```

* "1586476800000" - all responses are indexed by Unix timestamps
* "date" - Unix timestamp in human readable format
* "signal" - signal for tomorow: > 0 - buy, < 0 - sell short, 0 - close position, do nothing
* "returns" - yesterday profit and loss
* "cumulative" - cumulative returns of the trades
* "drawdown" - drawdowns of the trades
* "limit" - limit price

### <a name="one"></a><a href="/bitcoin-one-trading-strategy">Bitcoin One</a>

This is long only Bitcoin strategy, using returns model.

#### Returns, %

![Bitcoin One Returns](https://blue-images.talaikis.com/one-returns.png "Bitcoin One Returns")

#### Drawdown, %

![Bitcoin One Drawdown](https://blue-images.talaikis.com/one-drawdown.png "Bitcoin One Drawdown")

#### Yearly returns, %

![Bitcoin One Yearly returns](https://blue-images.talaikis.com/one-yearly-returns.png "Bitcoin One Yearly returns")

#### Monthly returns, %

![Bitcoin One Monthly returns](https://blue-images.talaikis.com/one-monthly-returns.png "Bitcoin One Monthly returns")

#### Weekly returns, %

![Bitcoin One Weekly returns](https://blue-images.talaikis.com/one-weekly-returns.png "Bitcoin One Weekly returns")

#### MAE distribution, %

![Bitcoin One MAE distribution](https://blue-images.talaikis.com/mae-one.png "Bitcoin One MAE distribution")

#### MFE distribution, %

![Bitcoin One MFE distribution](https://blue-images.talaikis.com/mfe-one.png "Bitcoin One MFE distribution")

#### Rolling MAE, %

![Bitcoin One Rolling MAE](https://blue-images.talaikis.com/mae-rolling-one.png "Bitcoin One Rolling MAE")

#### Rolling MFE, %

![Bitcoin One Rolling MFE](https://blue-images.talaikis.com/mfe-rolling-one.png "Bitcoin One Rolling MFE")


### <a name="one2"></a><a href="/bitcoin-one-2-trading-strategy">Bitcoin One 2.0</a>

This is long only Bitcoin strategy, using returns model.

#### Returns, %

![Bitcoin One 2.0 Returns](https://blue-images.talaikis.com/one-2-returns.png "Bitcoin One 2.0 Returns")

#### Drawdown, %

![Bitcoin One 2.0 Drawdown](https://blue-images.talaikis.com/one-2-drawdown.png "Bitcoin One 2.0 Drawdown")

#### Yearly returns, %

![Bitcoin One 2.0 Yearly returns](https://blue-images.talaikis.com/one-2-yearly-returns.png "Bitcoin One 2.0 Yearly returns")

#### Monthly returns, %

![Bitcoin One 2.0 Monthly returns](https://blue-images.talaikis.com/one-2-monthly-returns.png "Bitcoin One 2.0 Monthly returns")

#### Weekly returns, %

![Bitcoin One 2.0 Weekly returns](https://blue-images.talaikis.com/one-2-weekly-returns.png "Bitcoin One 2.0 Weekly returns")

#### MAE distribution, %

![Bitcoin One 2.0 MAE distribution](https://blue-images.talaikis.com/mae-one-2.png "Bitcoin One 2.0 MAE distribution")

#### MFE distribution, %

![Bitcoin One 2.0 MFE distribution](https://blue-images.talaikis.com/mfe-one-2.png "Bitcoin One 2.0 MFE distribution")

#### Rolling MAE, %

![Bitcoin One 2.0 Rolling MAE](https://blue-images.talaikis.com/mae-rolling-one-2.png "Bitcoin One 2.0 Rolling MAE")

#### Rolling MFE, %

![Bitcoin One 2.0 Rolling MFE](https://blue-images.talaikis.com/mfe-rolling-one-2.png "Bitcoin One 2.0 Rolling MFE")


### <a name="f"></a><a href="/bitcoin-f-trading-strategy">Bitcoin F</a>

This is same as Bitcoin One, just uses additional risk filter.

#### Returns, %

![Bitcoin F Returns](https://blue-images.talaikis.com/f-returns.png "Bitcoin F Returns")

#### Drawdown, %

![Bitcoin F Drawdown](https://blue-images.talaikis.com/f-drawdown.png "Bitcoin F Drawdown")

#### Yearly returns, %

![Bitcoin F Yearly returns](https://blue-images.talaikis.com/f-yearly-returns.png "Bitcoin S Yearly returns")

#### Monthly returns, %

![Bitcoin F Monthly returns](https://blue-images.talaikis.com/f-monthly-returns.png "Bitcoin F Monthly returns")

#### Weekly returns, %

![Bitcoin F Weekly returns](https://blue-images.talaikis.com/f-weekly-returns.png "Bitcoin F Weekly returns")

#### MAE distribution, %

![Bitcoin F MAE distribution](https://blue-images.talaikis.com/mae-f.png "Bitcoin F MAE distribution")

#### MFE distribution, %

![Bitcoin F MFE distribution](https://blue-images.talaikis.com/mfe-f.png "Bitcoin F MFE distribution")

#### Rolling MAE, %

![Bitcoin F Rolling MAE](https://blue-images.talaikis.com/mae-rolling-f.png "Bitcoin F Rolling MAE")

#### Rolling MFE, %

![Bitcoin F Rolling MFE](https://blue-images.talaikis.com/mfe-rolling-f.png "Bitcoin F Rolling MFE")


### <a name="sk"></a><a href="/bitcoin-s-trading-strategy">Bitcoin S</a>

This is long only Bitcoin strategy, using some of statistical methods to generate signals.

#### Returns, %

![Bitcoin S Returns](https://blue-images.talaikis.com/s-returns.png "Bitcoin S Returns")

#### Drawdown, %

![Bitcoin S Drawdown](https://blue-images.talaikis.com/s-drawdown.png "Bitcoin S Drawdown")

#### Yearly returns, %

![Bitcoin S Yearly returns](https://blue-images.talaikis.com/s-yearly-returns.png "Bitcoin S Yearly returns")

#### Monthly returns, %

![Bitcoin S Monthly returns](https://blue-images.talaikis.com/s-monthly-returns.png "Bitcoin S Monthly returns")

#### Weekly returns, %

![Bitcoin S Weekly returns](https://blue-images.talaikis.com/s-weekly-returns.png "Bitcoin S Weekly returns")

#### MAE distribution, %

![Bitcoin S MAE distribution](https://blue-images.talaikis.com/mae-s.png "Bitcoin S MAE distribution")

#### MFE distribution, %

![Bitcoin S MFE distribution](https://blue-images.talaikis.com/mfe-s.png "Bitcoin S MFE distribution")

#### Rolling MAE, %

![Bitcoin S Rolling MAE](https://blue-images.talaikis.com/mae-rolling-s.png "Bitcoin S Rolling MAE")

#### Rolling MFE, %

![Bitcoin S Rolling MFE](https://blue-images.talaikis.com/mfe-rolling-s.png "Bitcoin S Rolling MFE")


### <a name="s2"></a><a href="/bitcoin-s-2-trading-strategy">Bitcoin S 2.0</a>

This is long only, weekly Bitcoin strategy, using statistical model.

#### Returns, %

![Bitcoin S 2.0 Returns](https://blue-images.talaikis.com/s-2-returns.png "Bitcoin S 2.0 Returns")

#### Drawdown, %

![Bitcoin S 2.0 Drawdown](https://blue-images.talaikis.com/s-2-drawdown.png "Bitcoin S 2.0 Drawdown")

#### Yearly returns, %

![Bitcoin S 2.0 Yearly returns](https://blue-images.talaikis.com/s-2-yearly-returns.png "Bitcoin S 2.0 Yearly returns")

#### Monthly returns, %

![Bitcoin S 2.0 Monthly returns](https://blue-images.talaikis.com/s-2-monthly-returns.png "Bitcoin S 2.0 Monthly returns")

#### Weekly returns, %

![Bitcoin S 2.0 Weekly returns](https://blue-images.talaikis.com/s-2-weekly-returns.png "Bitcoin S 2.0 Weekly returns")

#### MAE distribution, %

![Bitcoin S 2.0 MAE distribution](https://blue-images.talaikis.com/mae-s-2.png "Bitcoin S 2.0 MAE distribution")

#### MFE distribution, %

![Bitcoin S 2.0 MFE distribution](https://blue-images.talaikis.com/mfe-s-2.png "Bitcoin S 2.0 MFE distribution")

#### Rolling MAE, %

![Bitcoin S 2.0 Rolling MAE](https://blue-images.talaikis.com/mae-rolling-s-2.png "Bitcoin S 2.0 Rolling MAE")

#### Rolling MFE, %

![Bitcoin S 2.0 Rolling MFE](https://blue-images.talaikis.com/mfe-rolling-s-2.png "Bitcoin S 2.0 Rolling MFE")


### <a name="s3"></a><a href="/bitcoin-s-3-trading-strategy">Bitcoin S 3.0</a>

This is long only, weekly Bitcoin strategy, using other strategies.

#### Returns, %

![Bitcoin S 3.0 Returns](https://blue-images.talaikis.com/s-3-returns.png "Bitcoin S 3.0 Returns")

#### Drawdown, %

![Bitcoin S 3.0 Drawdown](https://blue-images.talaikis.com/s-3-drawdown.png "Bitcoin S 3.0 Drawdown")

#### Yearly returns, %

![Bitcoin S 3.0 Yearly returns](https://blue-images.talaikis.com/s-3-yearly-returns.png "Bitcoin S 3.0 Yearly returns")

#### Monthly returns, %

![Bitcoin S 3.0 Monthly returns](https://blue-images.talaikis.com/s-3-monthly-returns.png "Bitcoin S 3.0 Monthly returns")

#### Weekly returns, %

![Bitcoin S 3.0 Weekly returns](https://blue-images.talaikis.com/s-3-weekly-returns.png "Bitcoin S 3.0 Weekly returns")

#### MAE distribution, %

![Bitcoin S 3.0 MAE distribution](https://blue-images.talaikis.com/mae-s-3.png "Bitcoin S 3.0 MAE distribution")

#### MFE distribution, %

![Bitcoin S 3.0 MFE distribution](https://blue-images.talaikis.com/mfe-s-3.png "Bitcoin S 3.0 MFE distribution")

#### Rolling MAE, %

![Bitcoin S 3.0 Rolling MAE](https://blue-images.talaikis.com/mae-rolling-s-3.png "Bitcoin S 3.0 Rolling MAE")

#### Rolling MFE, %

![Bitcoin S 3.0 Rolling MFE](https://blue-images.talaikis.com/mfe-rolling-s-3.png "Bitcoin S 3.0 Rolling MFE")


### <a name="pi"></a><a href="/bitcoin-pi-trading-strategy">Bitcoin Pi</a>

This is long only Bitcoin strategy using pattern recognition.

#### Returns, %

![Bitcoin Pi Returns](https://blue-images.talaikis.com/pi-returns.png "Bitcoin Pi Returns")

#### Drawdown, %

![Bitcoin Pi Drawdown](https://blue-images.talaikis.com/pi-drawdown.png "Bitcoin Pi Drawdown")

#### Yearly returns, %

![Bitcoin Pi Yearly returns](https://blue-images.talaikis.com/pi-yearly-returns.png "Bitcoin Pi Yearly returns")

#### Monthly returns, %

![Bitcoin Pi Monthly returns](https://blue-images.talaikis.com/pi-monthly-returns.png "Bitcoin Pi Monthly returns")

#### Weekly returns, %

![Bitcoin Pi Weekly returns](https://blue-images.talaikis.com/pi-weekly-returns.png "Bitcoin Pi Weekly returns")

#### MAE distribution, %

![Bitcoin Pi MAE distribution](https://blue-images.talaikis.com/mae-pi.png "Bitcoin Pi MAE distribution")

#### MFE distribution, %

![Bitcoin Pi MFE distribution](https://blue-images.talaikis.com/mfe-pi.png "Bitcoin Pi MFE distribution")

#### Rolling MAE, %

![Bitcoin Pi Rolling MAE](https://blue-images.talaikis.com/mae-rolling-pi.png "Bitcoin Pi Rolling MAE")

#### Rolling MFE, %

![Bitcoin Pi Rolling MFE](https://blue-images.talaikis.com/mfe-rolling-pi.png "Bitcoin Pi Rolling MFE")


### <a name="pi2"></a><a href="/bitcoin-pi-2-trading-strategy">Bitcoin Pi 2.0</a>

This is long only Bitcoin strategy using pattern recognition.

#### Returns, %

![Bitcoin Pi 2.0 Returns](https://blue-images.talaikis.com/pi-2-returns.png "Bitcoin Pi 2.0 Returns")

#### Drawdown, %

![Bitcoin Pi 2.0 Drawdown](https://blue-images.talaikis.com/pi-2-drawdown.png "Bitcoin Pi 2.0 Drawdown")

#### Yearly returns, %

![Bitcoin Pi 2.0 Yearly returns](https://blue-images.talaikis.com/pi-2-yearly-returns.png "Bitcoin Pi 2.0 Yearly returns")

#### Monthly returns, %

![Bitcoin Pi 2.0 Monthly returns](https://blue-images.talaikis.com/pi-2-monthly-returns.png "Bitcoin Pi 2.0 Monthly returns")

#### Weekly returns, %

![Bitcoin Pi 2.0 Weekly returns](https://blue-images.talaikis.com/pi-2-weekly-returns.png "Bitcoin Pi 2.0 Weekly returns")

#### MAE distribution, %

![Bitcoin Pi 2.0 MAE distribution](https://blue-images.talaikis.com/mae-pi-2.png "Bitcoin Pi 2.0 MAE distribution")

#### MFE distribution, %

![Bitcoin Pi 2.0 MFE distribution](https://blue-images.talaikis.com/mfe-pi-2.png "Bitcoin Pi 2.0 MFE distribution")

#### Rolling MAE, %

![Bitcoin Pi 2.0 Rolling MAE](https://blue-images.talaikis.com/mae-rolling-pi-2.png "Bitcoin Pi 2.0 Rolling MAE")

#### Rolling MFE, %

![Bitcoin Pi 2.0 Rolling MFE](https://blue-images.talaikis.com/mfe-rolling-pi-2.png "Bitcoin Pi 2.0 Rolling MFE")


### <a name="idx"></a><a href="/bitcoin-idx-trading-strategy">Portfolio of strategies</a>

This is trading strategies portfolio ("index") of several of the above trading strategies.

Correlations of the strategies:

![Correlations of the trading strategies](https://blue-images.talaikis.com/Strategies-heatmap.png "Correlations of the trading strategies")

#### Returns, %

![Portfolio of strategies Returns](https://blue-images.talaikis.com/idx-returns.png "Portfolio of strategies Returns")

#### Drawdown, %

![Portfolio of strategies Drawdown](https://blue-images.talaikis.com/idx-drawdown.png "Portfolio of strategies Drawdown")

#### Yearly returns, %

![Portfolio of strategies Yearly returns](https://blue-images.talaikis.com/idx-yearly-returns.png "Portfolio of strategies Yearly returns")

#### Monthly returns, %

![Portfolio of strategies Monthly returns](https://blue-images.talaikis.com/idx-monthly-returns.png "Portfolio of strategies Monthly returns")

#### Weekly returns, %

![Portfolio of strategies Weekly returns](https://blue-images.talaikis.com/idx-weekly-returns.png "Portfolio of strategies Weekly returns")

#### MAE distribution, %

![Portfolio of strategies MAE distribution](https://blue-images.talaikis.com/mae-idx.png "Portfolio of strategies MAE distribution")

#### MFE distribution, %

![Portfolio of strategies MFE distribution](https://blue-images.talaikis.com/mfe-idx.png "Portfolio of strategies MFE distribution")

#### Rolling MAE, %

![Portfolio of strategies Rolling MAE](https://blue-images.talaikis.com/mae-rolling-idx.png "Portfolio of strategies Rolling MAE")

#### Rolling MFE, %

![Portfolio of strategies Rolling MFE](https://blue-images.talaikis.com/mfe-rolling-idx.png "Portfolio of strategies Rolling MFE")

## How to get access to signals of the above mentioned strategies

I am workng hard to release this to the public. It will be implemented in a few steps, subject to change without notice:

* API memberships
* Email and SMS alerts
* Arbitrage strategies, bots
* Strategy portfolio signals

## Notes

This page will be updated without a notice if new strategies are released.

Images will be updated daily after API launch.
