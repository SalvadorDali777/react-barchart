import React from 'react'
import {
  Scale,
  Label,
} from './styles'

export default class ChartScale extends React.Component {

  render() {
    const {labels} = this.props

    return (
      <Scale>
        {labels.map((label,idx) => <Label key={idx}>{label}</Label>)}
      </Scale>
    )
  }
}
