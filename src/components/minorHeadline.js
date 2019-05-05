import React from 'react'
import styled from 'styled-components'

const MinorHeadlines = styled.h3`
    width: 50%;
    font: 'Open Sans';
    size: 32pt;
    text-align: center;
    font-weight: 100;
`

export default (props) => {
  return (
    <MinorHeadlines>
      {props.title}
    </MinorHeadlines>
  )
}
