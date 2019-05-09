import React from 'react';
import { graphql, StaticQuery } from 'gatsby'

import styled from 'styled-components'

import Layout from '../components/layout'
import PhotoBox from '../components/photobox'

const GalleryContainer = styled.section`
  width: 100%;
  height: 100vh;
  margin-top: 50px;
  padding: 20px;
  display: flex;
  flex-flow: wrap row;
`
// const GalleryImageHolder = styled.figure`
//   width: 25%;
//   height: 500px;
//   margin: 10px;
//   border-radius: 5px;
//   box-shadow: 3px 3px rgba(118,118,118,0.3);
//   z-index: 99;
// `

// const GalleryImage = styled(Img)`
//   width: 100%;
//   height: 100%;
//   background: cover;
//   border-radius: 5px;
// `


export default () => {
  return(
  <StaticQuery query={graphql`
    {
      doubleO18: file(relativePath: {eq: "0018.png"}){
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      L00: file(relativePath: {eq: "L00.png"}) {
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
        <PhotoBox
          image = {data.doubleO18}
          alt = "martin OO-18"
        />
        <PhotoBox
          image = {data.L00}
          alt = "Gibson L00"
        />
        {/* <GalleryImageHolder
          key={data.file}
        >
          <GalleryImage
            fluid = {data.doubleO18.childImageSharp.fluid}
          />
        </GalleryImageHolder> */}
      </GalleryContainer>
    </Layout>
  )}
  
  />
  )
}

 
