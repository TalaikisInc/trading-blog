---
title: Explaining MAE and MFE in trading
date: "2020-03-11"
image: https://blue-images.talaikis.com/mae-one.png
description: How you can profit from MAE and MFE trade execution strategies.
tags: ["mae", "statistics"]
---

MAE is maximum adverse excursion, the negative difference between the price the strategy recommends to buy and lowest low.

Similarly, MFE is maximum favorable excursion, the positive difference between price of the signal and highest high.

## Why it's important?

It is important because MAE means higher intratrade drawdowns and higher possible profits than are  shown by the strategy stats.

## How to use the data

We generate MAE and MFE distribution plots for each strategy. An example:

![](https://blue-images.talaikis.com/mae-one.png)

How you can profit using this data? Let's say, majority (80%) of MAEs and MFEs are within 200 and strategy stats show an average of 180 USD.

Let's say, strategy generates a buy signal at 9100 USD. You can buy at that price and expect results shown in the returns plot, or you can just set buy limit at 9100 minus 200 (80% of MAEs) at 8900 and set take profit at recommended price + 200 USD (majority of MFEs).

You probably will miss 20% of trades using this execution strategy, but will make much more than are shown in the close to close returns and have less of a drawdown.

## Notes

MAE will usually be higher in bad times and MFE will be higher in good times, so I recommend to use appropriate position management strategy to catch more of the MAE and MFE.
