import React from 'react'

const mapping = {
  sharpe_ratio: { t: 'Sharpe ratio', p: '', typ: 1 },
  max_drawdown: { t: 'Max drawdown', p: '%', typ: 1 },
  total_trades: { t: 'Total trades', p: '', typ: 0 },
  average_trade: { t: 'Average trade', p: '%', typ: 1 },
  average_win: { t: 'Average win', p: '%', typ: 1 },
  average_loss: { t: 'Average loss', p: '%', typ: 1 },
  total_winning_days: { t: 'Total winning', p: ' days', typ: 0 },
  total_losing_days: { t: 'Total losing', p: ' days', typ: 0 },
  win_years: { t: 'Win years', p: '%', typ: 1 },
  win_rate: { t: 'Win rate', p: '%', typ: 1 },
  average_mae: { t: 'Average MAE', p: '$', typ: 1 },
  average_mfe: { t: 'Average MFE', p: '$', typ: 1 },
  minimum_mae: { t: 'Minimum MAE', p: '$', typ: 1 },
  minimum_mfe: { t: 'Minimum MFE', p: '$', typ: 1 },
  best_year: { t: 'Best year', p: '%', typ: 1 },
  worst_year: { t: 'Worst year', p: '%', typ: 1 },
  average_up_month: { t: 'Average up month', p: '%', typ: 1 },
  average_down_month: { t: 'Average down month', p: '%', typ: 1 },
  win_months: { t: 'Win months', p: '%', typ: 1 },
  win_weeks: { t: 'Win weeks', p: '%', typ: 1 },
  max_dd_duration: { t: 'Max drawdown duration', p: ' days', typ: 0 }
}

function Stats ({ stats }) {
  return (
    <ul>
      {
        Object.keys(stats).map((key, i) => {
          const elem = <strong>{ mapping[key].typ === 0 ? stats[key] : stats[key].toFixed(2) }</strong>
          return (
            <li key={i}>
              { `${mapping[key].t}: ` } { elem } { mapping[key].p }
            </li>
          )
        })
      }
    </ul>
  )
}

export default Stats
