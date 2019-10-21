import styled, {css} from 'styled-components'

export const BarContainer = styled.div`
  width: 100%;
  z-index: 10;

  transition: opacity 400ms;

  ${props => props.isBarHovered && css`
    opacity: 0.2;
  `}

  &:hover {
    opacity: 1;
  }

  margin: 0px 10px;
`
