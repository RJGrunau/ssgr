import React from 'react';
import { graphql } from 'gatsby'
import styled from 'styled-components'




import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container'




const ContactPage  = ({data}) => (
    <Layout>
        <SEO title="About" keywords={[`Jeff Hoppe`,`Tacoma Guitar Reair`]}/>
        <Container>
            {console.log(data)}
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