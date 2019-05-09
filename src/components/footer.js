import React from 'react';
import styled from 'styled-components'




const SiteFooter = styled.footer`
  width: 100%;
  background: rgba(128,128,128,0.2);
  position: relative;
`
const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 0px 1.0875rem 1.45rem;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
`
const InfoBoxes = styled.div`
  padding: 5px;
  margin: 10px;
  font-size: 11pt;
  font-family: 'Open Sans';
  font-weigth: 100;
  color: #f3f3f3;
`
const OutsideLink = styled.a`
  color: #87cefa;
  text-decoration: none;
  font-family: 'Open Sans';
  font-size: 11pt;
  font-weight: 300;
`

const Footer = () => (
    <SiteFooter>
    <FooterContainer>
    <InfoBoxes>
    © {new Date().getFullYear()}, South Sound Guitar Repair
    </InfoBoxes>
    <InfoBoxes>

      © {new Date().getFullYear()}, Built with
        {` `}
        <OutsideLink href="https://www.gatsbyjs.org">Gatsby</OutsideLink>,
        by: <OutsideLink href="https://www.rjgrunau.com">Robert Grunau</OutsideLink>
    </InfoBoxes>
    </FooterContainer>
    </SiteFooter>
)
 
export default Footer;