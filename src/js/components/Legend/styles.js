import styled, {css} from 'styled-components'

export const LegendContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  padding: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);

  background-color: white;
  border: 1px solid #D6D6D6;

  z-index: 100;

  transition: opacity 400ms;

  ${props => props.isBarHovered && css`
    opacity: 0.4;
  `}
`

export const LegendLabel = styled.div`
  display: flex;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0px;
  }
`

export const ColorDiv = styled.div`
  height: 16px;
  width: 16px;
  margin-right: 4px;
`
