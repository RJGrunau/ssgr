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
const OutsideLink = styled.a`
  color: #f3f3f3;
  text-decoration: none;
  font-family: 'Open Sans';
  font-size: 18pt;
  font-weight: 300;
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
      const contactUs = `Emailing us through the contact form works best, but for emergencies the phone works as well:`
        return(
          <Layout>
            <SEO title="About" keywords={[`Jeff Hoppe`,`Tacoma Guitar Repair`,`contact south sound guitar repair`]}/>
            <Container>
                <ContactSection> 
                  <SmallForm/>
                  <TextHolder>
                    <Graphs
                      text ="Visits to South Sound Guitar Repair are by appointment only"
                    />
                    <Graphs
                      text = "Hours are from 10:00 - 6:00 pm Monday - Friday, excluding holidays"
                    />
                    <Graphs
                      text = {`${contactUs}`}
                    />
                    <OutsideLink
                      href="tel:(253) 220-3525"
                    >
                      (253) 220-3525
                    </OutsideLink>
                  </TextHolder>
                </ContactSection>
            </Container>
          </Layout>
        )
    }
}
 
export default ContactPage ;

