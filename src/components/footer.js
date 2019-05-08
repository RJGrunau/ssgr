import React from 'react';
import styled from 'styled-components'

const SiteFooter = styled.footer`
    width: 100%;
    background: grey;
`
const Footer = () => (
    <SiteFooter>
        © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
    </SiteFooter>
)
 
export default Footer;