import styled, {css} from 'styled-components'

export const Grid = styled.div`
  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
`


export const GridRow = styled.div`
  width: 100%;
  height: 100%;

  ${props => props.chartType === 'positive' && css`
    border-top: 1px solid rgb(230, 230, 230);

    &:last-child {
      border-bottom: 1px solid rgb(204, 214, 235);
    }
  `}

  ${props => props.chartType === 'negative' && css`
    border-bottom: 1px solid rgb(230, 230, 230);

    &:first-child {
      border-top: 1px solid rgb(204, 214, 235);
    }
  `}

  ${props => props.chartType === 'both' && css`
    border-top: 1px solid rgb(230, 230, 230);


    ${props => props.isCenter && css`
      border-top: 1px solid rgb(204, 214, 235);
    `}

    &:last-child {
      border-bottom: 1px solid rgb(230, 230, 230);
    }
  `}
`
