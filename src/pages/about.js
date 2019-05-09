import React from 'react';
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container'


const aboutJeff = `I graduated from the Guitar Repair and Construction program at Minnesota Southeast technical, Red Wing in 2006.

Following graduation, I was happy to accept a job in Seattle at the Dusty Strings harp and dulcimer factory.  I worked on the finish team where I learned the finer points of sanding, sanding  and more sanding.  Also, spraying and touch ups.  It was a great training ground for developing a fine eye and learn about efficiency.

However the pull of repairs wouldn’t leave me, so I ended up working for Mike Lull in Bellevue.  In this fast paced shop, I was able to learn a great deal about many instruments but mostly electric basses and guitars.  It was a great opportunity to learn real world experience from experts.  A side bonus was I got to work on many beautiful high end instruments.

I truly wanted to round out my knowledge and expand my skill set, so I set out for the Dusty Strings repair department.  Again, I was lucky enough to work with some true masters and learn, learn, learn.  This environment proved to be mostly acoustic instruments, but that was what I needed.   Neck resets, bridge reglues, fretwork, huge rebuild projects.  Eventually I was able to work my way up to Repair Shop Manager.
In 2016 after having learned so much all these years, I was ready to strike out on my own.  Hang my shingle.  I grew up in Tacoma, so it seems it has come full circle.  
I am ready to help with your project, large or small.  Acoustic or electric.`

const AboutSection = styled.section`
    width: 100%;
    height: 100vh;
`
const AboutImage = styled.figure`
    width: 40%;
    height: 700px;

    @media(max-width: 800px) {
        width: 100%;
        height: 400px;
    }
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
    margin-top: 5px;
    margin-left: 30px;
    text-align: left;

    @media(max-width: 800px){
        width: 100%;
        margin: 5px;
        padding: 3px;
    }
`
const AboutGraphs = styled.p`
    width: 100%;
    font-family: 'Open Sans';
    font-weight: 100;
    font-size: 16pt;
    line-height: 1.5em;
`


const AboutPage  = ({data}) => (
    <Layout>
        <SEO title="About" keywords={[`Jeff Hoppe`,`Tacoma Guitar Reair`]}/>
        <AboutSection>
            <Container>
                <AboutImage>
                    <Image
                        fluid = {data.file.childImageSharp.fluid}
                        alt="jeff hoppe"
                    />
                </AboutImage>
                <TextHolder>
                    <AboutGraphs>
                        {`${aboutJeff}`}
                    </AboutGraphs>
                </TextHolder>
            </Container>
        </AboutSection>

    </Layout>
)
 
export default AboutPage ;

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