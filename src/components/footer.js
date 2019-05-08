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
`


const Footer = () => (
    <SiteFooter>
        <FooterContainer>

            © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
        </FooterContainer>
    </SiteFooter>
)
 
export default Footer;