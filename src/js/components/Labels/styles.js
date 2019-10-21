import styled/*, {css}*/ from 'styled-components'

export const Scale = styled.div`
  //position: absolute;

  top: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  z-index: 50;

  grid-area: labels;

  justify-content: space-around;
`

export const Label = styled.div`
  width: 100%;

  text-align: center;
`
