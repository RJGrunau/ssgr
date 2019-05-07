import React from 'react';
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container'
import Graphs from '../components/pargagraphs'

const AboutImage = styled.figure`
    width: 40%;
    height: 700px;
`
const Image = styled(Img)`
  height: 100%;
  width: 100%;
  background: cover;
`
const TextHolder = styled.div`
    width: 55%;
    padding: 15px;
    margin: 15px;
    text-align: left;
`


const ContactPage  = ({data}) => (
    <Layout>
        <SEO title="About" keywords={[`Jeff Hoppe`,`Tacoma Guitar Reair`]}/>
        <Container>
            <AboutImage>
                <Image
                    fluid = {data.file.childImageSharp.fluid}
                    alt="jeff hoppe"
                />
            </AboutImage>
            <TextHolder>
                <Graphs
                
                />
            </TextHolder>
        </Container>
    </Layout>
)
 
export default ContactPage ;

export const query = graphql`
query{
    file(relativePath: {eq: "jeff_tele.png" }) {
        childImageSharp {
            fluid(maxWidth: 900){
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`