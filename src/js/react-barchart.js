import React from 'react'
import BarChart from './components/BarChart'
import PropTypes from 'prop-types'

export default class ReactBarchart extends React.Component {

  render() {
    return (
      <BarChart
        { ...this.props }
      />
    )
  }
}

ReactBarchart.defaultProps = {
  showLegend: true,
  rowCount: 10,
}

ReactBarchart.propTypes = {
  data: PropTypes.array.isRequired,
  showLegend: PropTypes.bool,
  rowCount: PropTypes.number,
}
