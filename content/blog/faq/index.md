---
title: FAQ
date: "2020-01-01"
description: Frequenty Asked Questions about BlueBlood services.
tags: ["info"]
---

* [Can I earn more than your performance?](#6)
* [What is the minimum capital required?](#2)
* [How to interpret signal values?](#1)
* [Where can I see live returns?](#3)
* [When are trading signals updated?](#4)
* [What is best strategy to use?](#5)
* [Where I can find statistics about the strategies?](#7)
* [I don't understand anything about APIs, can I still use your system?](#9)
* [Are returns shown in stats and charts reinvested?](#10)
* [I have a question, how I can ask?](#8)
* [How much of a PnL shown is in sample and out of sample?](#11)
* [Are all systems long only?](#12)
* [Are all systems on Bitcoin only?](#13)
* [What Sharpe formula is used?](#14)

### <a name="6"></a>Can I earn more than your performance?

Of course! Our performance shows close to close returns, but almost always there are differences between signal's closing price and low (MAE for longs),and high (MFE for longs).

If you can catch those differences, then your performance can be much higher than we record.

MAE is maximum adverse excursion, MFE is maximum favorable excursion. To help you, I provide those on our API and on [this page](/introducing-bitcoin-strategies).

Also, read my post on [MAEs and MFEs](/explaining-mae-mfe-trading).

### <a name="2"></a>What is the minimum capital required?

You can calculate your minimum capital required using this formula:

```python
minimum_capital = (MAE + bitcoin_price + max_drawdown) * leverage_factor
```

For example, if Bitcoin costs 5,000, average MAE is 200, and drawdown is 30%, then:

```python
minimum_capital = (200 + 5000 + 0.3*5000) = 6,700
```

So, minimum capital for 1 bitcoin would be 6,700 USD, for 0.1 - 670 USD, for 0.01 - 67 USD and so on.

This is only minimum recommendation, in most cases you need more than just that. But if you will be able to catch sometimes huge MAE and MFE, then you'll grow that quickly.

### <a name="1"></a>How to interpret signal values?

Signal 1 means 'buy' or 'hold', -1 - sell short, 0 - close existing positon.

Signal below 1 means that you should downscale your usual position size. For example, if you trade 10 Bitcoins for strategy A, and signal is 0.25, then you should buy 2.5 Bitcoins instead of 10.

### <a name="3"></a>Where can I see live returns?

We have API endpoints for live trading strategies returns, updated every day. Or you can just visit [performance](/performance) page, where you'll find charts of the returns. Charts are also updated daily.

### <a name="4"></a>When are tradign signals updated?

Bitcoin trading signals are generated 0:02 GMT time each day.

### <a name="5"></a>What is best strategy to use?

It depends on your [risk aversion](https://en.wikipedia.org/wiki/Risk_aversion). Trading has one rule - higher returns are always associated with higher risk. For example, [Bitcoin Pi 2.0](/bitcoin-pi-2-trading-strategy) most of the years generated over 50 percent a year, but with hefty 35 percent max drawdown. If you are not feeling well with 35 percent drawdown, then just go for another strategy.

For most users I would recommend to just use portfolio of strategies, because it uses many models and distributes its risk among them.

### <a name="7"></a>Where I can find statistics about the strategies?

[Performance](/performance) page listing the stats has links to strategy description pages, which also include live strategy statistics.

### <a name="8"></a>I have a question, how I can ask?

Please use my contact form located [here](https://talaikis.com).

### <a name="10"></a>Are returns shown in stats and charts reinvested?](#

No, returns are not reinvested by default, unless stated otherwise.

It is easy to mislead with reinvested returns, because reinvestments are always generating more than the strategy itself, and I believe in showing the reality, not just the time value.

Also, you need to note, that if you reinvest, drawdowns also will grow exponentially.

### <a name="9"></a>I don't understand anything about APIs, can I still use your system?

Of course! I have created a [helper app](https://bitcoin.talaikis.com/) just for you.

Or you can just get signals via SMS/ email with [Pro](https://rapidapi.com/talaikis.tadas/api/blueblood-bitcoin-trading-signals/pricing) and higher plans.

### <a name="11"></a>How much of a PnL shown is in sample and out of sample?

All strategies have half in sample and half out of the sample until March, 2020. Since March, 2020 everything is out of sample ("almost live").

"Almost live", because results don't account for a negligible (<1%) probability that some orders won't hit limit price.

All charts and data are updated daily with yesterday's (last week's) PnL.

Some strategies have risk filters (like F, One, One 2.0), but generally filters aren't working good compared with naked strategies, because they are often lagging.

All our strategies are event based, so if no Bitcoin fundamentals change, their performance shouldn't change much.

### <a name="12"></a>Are all systems long only?

For now, yes, except for arbitrage strategies.

### <a name="13"></a>Are all systems on Bitcoin only?

For now, yes, except for arbitrage strategies, because all other instruments are highly correlated with Bitcoin with worse performance than Bitcoin.

### <a name="14"></a>What Sharpe formula is used?

`sharpe = (returns / volatility) x sqrt{365}`
