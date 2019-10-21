import React from 'react'
import {
  LegendContainer,
  LegendLabel,
  ColorDiv,
} from './styles'

export default class Legend extends React.Component {

  render() {
    const {labels, colors, isBarHovered} = this.props

    return (
      <LegendContainer isBarHovered={isBarHovered}>
        {labels.map((label,idx) => (
          <LegendLabel key={idx}>
            <ColorDiv style={{backgroundColor: colors[idx]}}/>
            {label}
          </LegendLabel>
        ))}
      </LegendContainer>
    )
  }
}
