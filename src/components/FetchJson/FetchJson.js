import React, { Component } from 'react'
import styled from 'styled-components'

import Card from '../Card'
import Heading, { HeadingSmall } from '../Heading'
import { COLORS } from '../../constants'

/**
 * For this component, you will need to grab some JSON data from
 * the API endpoint provided below and display it inside a
 * CodeBlock. While the data is loading, display 'Loading...'.
 * If it fails, make sure to notify the user.
 */
const jsonUri = 'https://jsonplaceholder.typicode.com/users/1'

export default class FetchJson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 'Loading...'
    };
  }

  componentDidMount() {
    fetch(jsonUri,{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((response)=> {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((responseJSON)=> {
      this.setState({display: JSON.stringify(responseJSON, null, 1)});
    })
    .catch((error)=>{
      console.log("There was a problem: \n", error);
      this.setState({display: 'Error'});
    });
  }
  render() {
    return (
      <Card>
        <Heading color={COLORS.pink[300]}>FetchJson Component</Heading>
        <HeadingSmall>
          This component grabs JSON from an API and displays it.
        </HeadingSmall>
        <CodeBlock>
          {this.state.display}
        </CodeBlock>
      </Card>
    )
  }
}

const CodeBlock = styled.pre`
  background: ${COLORS.white[300]};
  color: ${COLORS.black[100]};
  border-radius: 4px;
  border: 2px solid ${COLORS.white[700]};
  padding: 25px;
`
