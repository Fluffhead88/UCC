import styled from 'styled-components'
import { COLORS } from '../../constants'

const Heading = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: ${props => (props.color ? props.color : COLORS.blue[300])};
  margin: 0;
`

export const HeadingLarge = styled.h1`
  font-size: 32px;
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
  color: ${props => (props.color ? props.color : COLORS.white[100])};
`

export const HeadingSmall = styled.h3`
  font-size: 15px;
  font-weight: 400;
  font-family: 'Raleway', sans-serif;
  color: ${props => (props.color ? props.color : COLORS.black[300])};
  margin-top: 0;
`

export default Heading
