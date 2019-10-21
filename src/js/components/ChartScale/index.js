import React from 'react'
import {
  ScaleValue,
  ScaleContainer,
} from './styles'

export default class ChartScale extends React.Component {

  render() {
    const {maxValue, rowCount, chartType} = this.props
    const allRowCount = chartType === 'both' ? rowCount * 2 + 1 : rowCount + 1

    return (
      <ScaleContainer>
        {Array.from({length: allRowCount}).map((_,idx) => {
          const value = chartType === 'both' || chartType === 'positive' ? (maxValue - maxValue*idx/rowCount) : -(maxValue*idx/rowCount)

          return (
            <ScaleValue
              isFirst={idx === 0}
              isLast={idx === allRowCount-1}
              key={idx}
            >
              {value}
            </ScaleValue>
          )
        })}
      </ScaleContainer>
    )
  }
}
