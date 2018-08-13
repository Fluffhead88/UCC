import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Card from '../Card'
import Heading, { HeadingSmall } from '../Heading'
import { COLORS } from '../../constants'

/**
 * For this component, display a text input and allow the user
 * to search for values contained within the `items` variable
 * below. If no input exists, the Results section should be
 * removed from the DOM. If there are no matches for the search
 * query, the user should be notified that no matches were found.
 * If match(es) were found, display them below the input.
 */
const items = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District Of Columbia',
  'Federated States Of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Islands',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
]

export default class SearchList extends Component {
constructor(props) {
  super(props);

  this.state = {
    searchParams: '',
    results: []
  };

  this._handleFilter = this._handleFilter.bind(this);
  this._filter = this._filter.bind(this);
}

_handleFilter(event) {
  let self = this;
  this.setState({searchParams: event.target.value}, this._filter);
}

_filter() {
  if (this.state.searchParams !== '') {
    let array = [];
    items.filter((item)=>{
      if (item.toLowerCase().indexOf(this.state.searchParams.toLowerCase()) > -1) {
        array.push(item);
      }
    });
    if (array.length > 0){
      this.setState({results: array});
    }
    else {
      this.setState({results: ['No matches found']});
    }
  }
  else {
    this.setState({results: []});
  }
}

render() {
  let results = this.state.results.map(function(result, index){
    return <SearchResult key={index}>{result}</SearchResult>
  })
  return (
    <Card>
      <Heading color={COLORS.yellow[300]}>FilterList Component</Heading>
      <HeadingSmall>
        This component filters a list based on user input.
      </HeadingSmall>
      {/* display input and results here */}
      <SearchInput placeholder="Search..." onChange={this._handleFilter}></SearchInput>
      {this.state.results.length > 0?
        <div>
          <SearchResultsHeading>
            Results
          </SearchResultsHeading>
          <SearchResultsList>
            {results}
          </SearchResultsList>
        </div>
        :
        ''
        }
    </Card>
  )
  }
}

const SearchInput = styled.input`
  display: block;
  border-radius: 4px;
  font-size: 16px;
  padding: 6px 10px 5px;
  border: 1px solid ${COLORS.white[100]};
  &:focus {
    outline: none;
  }
`

const SearchResultsHeading = styled.div`
  font-weight: 700;
  text-align: center;
  margin: 5px 0;
`

const SearchResultsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  border: 1px solid ${COLORS.black[500]};
  overflow: hidden;
`

const SearchResult = styled.li`
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid ${COLORS.black[500]};
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: ${COLORS.blue[500]};
    color: #fff;
  }
`
