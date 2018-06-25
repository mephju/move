
import React, {Component} from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
`

const Li = styled.ul`
  margin: 0;
  padding: 0;
  display:inline-block;
  flex: 1 1 auto;
  background: #efefef;
  color: #555;
  font-weight: bold;
  cursor: pointer;
  padding: 20px;
  border-right: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
  &:last-child {
    border-right: 0;
  }
  &:hover {
    background: #dedede;
  }
  align-items: center;
`

const DateList = props => {

  console.log('DateList', props)

  return <Ul>
    {props.dates.map(d =>
      <Li
        key={d}
        onClick={() => props.onClick(d)}>

        {d}

      </Li>
    )}
  </Ul>
}

export default DateList