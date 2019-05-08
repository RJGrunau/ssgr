import React, {Component} from 'react';
import styled from 'styled-components'

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container'
import SmallForm from '../components/smallForm'
import TextHolder from '../components/textHolder'
import Graphs from '../components/pargagraphs'

const ContactSection = styled.section`
  padding:10px;
  width: 100%;
  display: flex;
  flex-flow: wrap row;

  @media(max-width: 800px) {
    padding: 5px;
    flex-flow: wrap column;
  }
`


class ContactPage extends Component {
    constructor(props){
        super(props);
        this.state = {
          isValid: false,
          name: '',
          email: '',
          message: ''
        }
    }
    render() {
        return(

          <Layout>
            <SEO title="About" keywords={[`Jeff Hoppe`,`Tacoma Guitar Repair`,`contact south sound guitar repair`]}/>
            <Container>
                <ContactSection> 
                  <SmallForm/>
                  <TextHolder>
                    <Graphs
                      text ="we are by appointment only"
                    />
                  </TextHolder>
                </ContactSection>
            </Container>
          </Layout>
        )
    }
}
 
export default ContactPage ;

