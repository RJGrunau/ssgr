import React from 'react'
import {graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Graphs from '../components/pargagraphs'

const TextHolder = styled.div`
  width: 40%;
  margin-top: 100px;
  padding: 15px;
  margin: 15px;
  text-align: left;
  background: rgba(21,21,21,0.3);
  text-align: left;
  border-radius: 5px; 

  @media(max-width: 800px){
    width: 100%;
    margin-top: 0;
  }
`
const aboutText = `South Sound Guitar Repair is a guitar and bass repair shop in Tacoma, Washington specializing in vintage and high-end repair and set ups. 
Repair and service are by appointment only. Get in  touch if you'd like to make an appointment to discuss your work on your instrument.`
const taylor = `South Sound Guitar Repair is Taylor Warranty Center`

export default () => {
  return (
    <StaticQuery query={graphql`
      {
        taylorLogo: file(relativePath: { eq: "taylorLogo.png"}) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}render={(data) =>(
      <TextHolder>
      <Graphs
        text = {`${aboutText}`}
      />
      <Graphs
        text = {`${taylor}`}
      />

    </TextHolder>
    )}
      
    
    
    />
  )
}
