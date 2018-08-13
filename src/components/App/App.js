import React from 'react'
import styled from 'styled-components'

import { HeadingLarge } from '../Heading'
import { COLORS } from '../../constants'

import List from '../List'
import FetchJson from '../FetchJson'
import SearchList from '../SearchList'

const App = () => (
  <Container>
    <Wrapper>
      <HeadingLarge>
        <div style={{ color: '#fff', fontSize: '42px' }}>UCC</div> React
        Assessment
      </HeadingLarge>
      <List />
      <FetchJson />
      <SearchList />
    </Wrapper>
  </Container>
)

const Container = styled.div`
  background: ${COLORS.black[200]};
`

const Wrapper = styled.div`
  padding: 25px;
  min-height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
`

export default App
