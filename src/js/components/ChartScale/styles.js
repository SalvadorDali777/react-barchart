import styled, {css} from 'styled-components'

export const Scale = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

export const ScaleValue = styled.div`
  height: 100%;
  display: flex;
  align-items: center;


  ${props => props.isFirst && css`
    height: 50%;

    display: flex;
    align-items: flex-start;
  `}

  ${props => props.isLast && css`
    height: 50%;
  `}
`

export const ScaleContainer = styled.div`
  grid-area: scale;
  display: flex;
  flex-direction: column;

  align-items: flex-end;
`
