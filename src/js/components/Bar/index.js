import React from 'react'
import {
  BarContainer,
} from './styles'

export default class Bar extends React.Component {

  onHover = () => {
    this.props.onHover()
  }

  render() {
    const {
      onMouseEnterBar,
      onMouseLeaveBar,
      isBarHovered,
      label,
      value,
      height,
      backgroundColor,
    } = this.props

    return (
      <BarContainer
        isBarHovered={isBarHovered}
        style={{
          height: height,
          backgroundColor: backgroundColor,
        }}
        onMouseEnter={onMouseEnterBar}
        onMouseLeave={onMouseLeaveBar}

        data-tip={`${label}: ${value}`}
      />
    )
  }
}
