import React from 'react'
import BarChart from './js/react-barchart.js'

import {
  Container,
  ChartContainer,
} from './styles.js'


export default class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <Container>
        <h1> React BarChart </h1>
        <ChartContainer>
          <BarChart
            data={[
              {
                label: 'Bar 1',
                value: 100,
              },
              {
                label: 'Bar 2',
                value: 200,
              },
              {
                label: 'Bar 3',
                value: 71,
              },
              {
                label: 'Description',
                value: 29,
              },
              {
                label: 'Word',
                value: -850,
              },
              {
                label: 'Strange',
                value: 729,
              },
              {
                label: 'Blue stable',
                value: -431,
                color: 'blue',
              },
            ]}
            showLegend={true}
            rowCount={10}
          />
        </ChartContainer>
      </Container>
    )
  }
}
