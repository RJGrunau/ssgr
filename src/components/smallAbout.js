import React from 'react'
import styled from 'styled-components'

import Graphs from '../components/pargagraphs'

const TextHolder = styled.div`
  width: 40%;
  margin-top: 100px;
  padding: 15px;
  text-align: left;
  background: rgba(128,128,128,0.3);
  text-align: left;
  border-radius: 5px;
  
`
const aboutText = `South Sound Guitar Repair is a guitar and bass repair shop in Tacoma, Washington specializing in vintage and high-end repair and set ups. 
Repair and service are by appointment only. Get in  touch if you'd like to make an appointment to discuss your work on your instrument.`
export default () => {
  return (
    <TextHolder>
      <Graphs
        text = {`${aboutText}`}
      />
    </TextHolder>
  )
}
