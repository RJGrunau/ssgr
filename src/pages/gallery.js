import React from 'react';
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'


const GalleryContainer = styled.section`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-flow: wrap row;
`
const GalleryImageHolder = styled.figure`
  width: 33.3%;
  height: 150px;
`

const GalleryImage = styled(Img)`

`


export default () => {
  return(
  <StaticQuery query={graphql`
    {
      doubleO18: file(relativePath: { eq: "0018.png"}) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}render={(data) => (
    <Layout>
      <GalleryContainer>
        <GalleryImageHolder
          key={data.file}
        >
          <GalleryImage
            fluid = {data.doubleO18.childImageSharp.fluid}
          />
        </GalleryImageHolder>
      </GalleryContainer>
    </Layout>
  )}
  
  />
  )
}

 
