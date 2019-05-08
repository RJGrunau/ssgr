import React from 'react';
import styled from 'styled-components'

import Graphs from '../components/pargagraphs'


const SiteFooter = styled.footer`
    width: 100%;
    background: rgba(128,128,128,0.2);
`
const FooterContainer = styled.div`
    margin: 0 auto;
    max-width: 1400px;
    padding: 0px 1.0875rem 1.45rem;
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
`
const CopyWrite = styled.div`
    padding: 5px;
    margin: 10px;
    font-size: 11pt;
    font-family: 'Open Sans';
    font-weigth: 100;
    color: #f3f3f3;

`


const Footer = () => (
    <SiteFooter>
    <FooterContainer>
    <CopyWrite>
    © {new Date().getFullYear()}, South Sound Guitar Repair
    </CopyWrite>
      © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
    </FooterContainer>
    </SiteFooter>
)
 
export default Footer;