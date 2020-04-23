---
title: Modified pricing model for arbitrage strategies
date: "2020-04-18"
image: https://blue-images.talaikis.com/modpricing1.png
description: Exploring modified pricing model for Bitcoin arbitrage strategies.
---

Modified pricing for [arbitrage strategies](/bitcoin-arbitrage-strategies-live) is a statistics derived metric, which allows to improve profits of the arbitrage strategies.

Simulations show that this model should work on approximately 80-90% of trading days, which, also involves some risk.

Here is an example on the first day<sup>*</sup> limit order fulfillment:

![](https://blue-images.talaikis.com/modpricing1.png)

<sup>*</sup> Limit orders on any leg should be fulfilled on the first day.

I believe that greater profit will also always bring greater risk. As seen above in the modified pricing model, drawdowns can hit 40+%:

![](https://blue-images.talaikis.com/modpricing2.png)

Examining further, it can sometimes happen on high volatility, when signals change suddenly on big moves, days.

Improved pricing on signal change day = "improved" negative day.

Avoiding those is probably impossible unless we'll use some future looking (i.e. unrealistic) filter, like:

![](https://blue-images.talaikis.com/modpricing3.png)

...will produce something like:

![](https://blue-images.talaikis.com/modpricing4.png)

And vice versa, if we'll use the data from the past, we'll ruin the profits from the future.

The way to avoid those is to diversify, which improved risk profile always will give less abnormal returns.
