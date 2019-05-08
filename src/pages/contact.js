import React, {Component} from 'react';
import styled from 'styled-components'

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container'

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
const MainForm = styled.form`
  width: 40%;
  margin: 10px;
  display: flex;
  flex-flow: wrap column;
  background: rgba(128,128,128,0.3);
`
// const Inputs

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
                  <MainForm>

                  </MainForm>
                </ContactSection>
            </Container>
          </Layout>
        )
    }
}
 
export default ContactPage ;

