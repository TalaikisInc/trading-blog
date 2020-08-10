---
title: Introducing stock market strategies, a sample
date: "2020-08-10"
image: https://blue-images.talaikis.com/stock1.png
description: Introducing stock market strategies, a sample
tags: ["trading", "stocks"]
---

I have long running various stock market strategies, for example, complex ones that are using [BlueBlood Engine](https://github.com/TalaikisInc/blueblood), which is completely outdated now and is partially public.

First mention of the "engine" strategies was the article in Medium: [Introducing BlueBlood Quantitative Trading Strategies Index](https://medium.com/bluebloodltd/introducing-blueblood-quantitative-trading-strategies-index-bcffe02e7313), but also there were a lot of single-shot strategies targeting one or few of the simple trading ideas.

For all of them I had the plans to make them public as the Bitcoin signals, listed in this blog, but market tests show that people are more interested in having the control in their hands (and mostly losing the money) than to rely on some outsider, mostly reliable automated ones. Sometimes it is funny knowing how the human psychology works.

OK, anyway, so I won't be giving much attention in the time consuming development of the public services. Instead, I can do single-shot offerings like below.

So, yesterday I had a statistics based idea on the QQQ + MSFT and made a simple trading strategy on AWS Lambda + SES (sending email signals 10 minutes before the market close):

![Strategy](https://blue-images.talaikis.com/stock1.png)

Some stats:

* Daily on MOC
* 1 parameter (~3 months window)
* Sharpe (annualized): 0.81
* Returns (not reinvested!): ~10%/ year

The code (Python + serverless) is for sale - 99 EUR. If interested, send it to PayPal: info@talaikis.com

Note! Current delivery is in 1 week, because I want to check it's working correctly in action.
