import React from 'react'
import Bar from '../Bar'
import ChartGrid from '../ChartGrid'
import ChartScale from '../ChartScale'
import Labels from '../Labels'
import Legend from '../Legend'

import ReactTooltip from 'react-tooltip'

import {Colors} from '../../util/colors'

import {
  Container,
  HeroContainer,
  ChartContainer,
  Positive,
  Negative,

  BarContainer,
} from './styles'

export default class ReactTimeslotCalendar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isBarHovered: false,
    }
  }

  get chartType() {
    const {data} = this.props

    if (data.filter(i => i.value >= 0).length === data.length) { return 'positive' }
    if (data.filter(i => i.value <= 0).length === data.length) { return 'negative' }

    return 'both'
  }

  get maxValue() {
    const {data} = this.props
    return data.reduce((acc, bar) => acc < Math.abs(bar.value) ? Math.abs(bar.value) : acc, 0)
  }

  renderBars({chartType, roundedValue}) {
    const {data} = this.props
    return data.map((bar, idx) => this.renderBar(bar, idx, chartType, roundedValue))
  }

  roundValue = (value) => {
    const rounded = Math.ceil(value)
    const splited = rounded.toString().split('')

    return (rounded < 10 || splited.filter(i => i !== '0').length === 1 ? splited[0] : +splited[0]+1) * (10**(splited.length - 1))
  }

  renderBar(bar, idx, chartType, roundedValue) {
    const {isBarHovered} = this.state
    const {label, value, color} = bar

    const isPositive = value >= 0

    return (
      <BarContainer key={idx}>
        {(chartType === 'both' || chartType === 'positive') && <Positive>
          {isPositive && <Bar
            backgroundColor={color || Colors[idx]}
            height={`${(value*100/roundedValue).toFixed(1)}%`}
            label={label}
            value={value}
            isBarHovered={isBarHovered}
            onMouseEnterBar={this.hangleMouseEnter}
            onMouseLeaveBar={this.handleMouseLeave}
          />}
        </Positive>}
        {(chartType === 'both' || chartType === 'negative') && <Negative>
          {!isPositive && <Bar
            backgroundColor={color || Colors[idx]}
            height={`${(Math.abs(value)*100/roundedValue).toFixed(1)}%`}
            label={label}
            value={value}
            isBarHovered={isBarHovered}
            onMouseEnterBar={this.hangleMouseEnter}
            onMouseLeaveBar={this.handleMouseLeave}
          />}
        </Negative>}
      </BarContainer>
    )
  }

  handleMouseLeave = (e) => {
    this.setState({isBarHovered: false})
  }

  hangleMouseEnter = (e) => {
    this.setState({isBarHovered: true})
  }

  render() {
    const {isBarHovered} = this.state
    const {data, rowCount, showLegend} = this.props

    const maxValue = this.maxValue
    const roundedValue = this.roundValue(maxValue)
    const labels = data.map(a => a.label)
    const colors = data.map((i, idx) => i.color || Colors[idx])

    const chartType = this.chartType

    return (
      <HeroContainer>
        <ChartScale
          maxValue={roundedValue}
          rowCount={rowCount}
          chartType={chartType}
        />
        <ChartContainer>
          <Container>
            {this.renderBars({chartType, roundedValue})}
          </Container>
          <ChartGrid
            rowCount={rowCount}
            chartType={chartType}
          />
          {showLegend && <Legend
            isBarHovered={isBarHovered}
            labels={labels}
            colors={colors}
          />}
        </ChartContainer>
        <Labels labels={labels}/>
        <ReactTooltip />
      </HeroContainer>
    )
  }
}
