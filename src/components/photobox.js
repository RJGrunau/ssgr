import React from 'react';
import Img from 'gatsby-image'
import styled from 'styled-components'

const GalleryImageHolder = styled.figure`
  width: 25%;
  height: 500px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 3px 3px rgba(118,118,118,0.3);
  z-index: 99;

  @media(max-width: 800px) {
    width: 100%;
    height: 300px;
  }
`

const GalleryImage = styled(Img)`
  width: 100%;
  height: 100%;
  background: cover;
  border-radius: 5px;
`
const PhotoBox = (({image, alt}) => (
    <GalleryImageHolder>
        <GalleryImage
            fluid = {image.childImageSharp.fluid}
            alt = {alt}
        />
    </GalleryImageHolder>
))
 
export default PhotoBox;