import React from 'react'
import styled from 'styled-components'

const Headline = styled.h1`
  font-size: 36pt;
  font-family: 'Open Sans';
  font-weight: 100;
  text-transform: uppercase;
`

export default ( props ) => {
  return (
    <Headline>
      {props.title}
    </Headline>
  )
}
