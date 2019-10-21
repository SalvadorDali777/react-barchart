import styled/*, {css}*/ from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-end;
`

export const HeroContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  position: relative;
  grid:
    [row1-start] "scale chart" 1fr [row1-end]
    [row2-start] ". labels" auto [row2-end] / auto 1fr;

  grid-gap: 1vw;


  color: #777777;
  font-size: 11px;
  //line-height: 11px;
`

export const ChartContainer = styled.div`
  height: 100%;
  position: relative;
  gridArea: chart;

  display: flex;
  flex-direction: column;
`

export const Positive = styled.div`
  height: 100%;

  width: 100%;
  display: flex;
  align-items: flex-end;
`

export const Negative = styled.div`
  height: 100%;

  width: 100%;
  display: flex;
`

export const BarContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`
