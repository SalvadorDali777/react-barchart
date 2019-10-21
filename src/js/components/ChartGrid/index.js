import React from 'react'
import {
  Grid,
  GridRow,
} from './styles'

export default class ChartGrid extends React.Component {

  render() {
    const {chartType, rowCount} = this.props
    const allRowCount = chartType === 'both' ? rowCount * 2 : rowCount 

    return (
      <Grid>
        {Array.from({length: allRowCount}).map((_,idx) => (
          <GridRow
            isCenter={idx === rowCount}
            chartType={chartType}
            key={idx}
          />
        ))}
      </Grid>
    )
  }
}
