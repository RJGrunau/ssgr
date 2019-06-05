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

  @media(min-width: 801px){
    margin-bottom: 300px;
  }
`
const BufferDiv = styled.div`
  width: 100%;
  height: 10px;
  margin: 5px;
  color: transparent;
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
      const contactUs = `Emailing us through the contact form works best, but for the phone works as well:`
      const findUs = `We can be found here:`
      const address = ` 323 Puyallup Ave suite d, Tacoma, WA 98421`
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
                    <BufferDiv>
                      some text you can't see because I'm running out of time and need to ship
                    </BufferDiv>
                    <Graphs
                      text={`${findUs}`}
                    />
                    <OutsideLink
                        target = 'newtab'
                        href="https://www.google.com/maps/place/South+Sound+Guitar+Repair/@47.2126702,-122.4506653,13z/data=!4m12!1m6!3m5!1s0x0:0x2a89591008d1c83a!2sSouth+Sound+Guitar+Repair!8m2!3d47.2409833!4d-122.4297655!3m4!1s0x0:0x2a89591008d1c83a!8m2!3d47.2409833!4d-122.4297655"
                       >
                        <Graphs
                          text={`${address}`}
                        /> 
                    </OutsideLink> 
                  </TextHolder>
                </ContactSection>
            </Container>
          </Layout>
        )
    }
}
 
export default ContactPage ;

