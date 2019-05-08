import React from 'react'
import styled from 'styled-components'

const Graphs=styled.p`
	font-family: 'Open Sans';
	font-weight: 100;
	font-size: 24pt;
	color: #f3f3f3;
  line-height: 1.3em;
  
  @media(max-width: 800px) {
    font-size: 18pt;
    width: 100%;
  }
`

export default (props) => {
  return (
    <Graphs>
      {props.text}
    </Graphs>
  )
}
