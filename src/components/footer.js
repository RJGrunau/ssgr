import React from 'react';
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'




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
  aligin-items: center;

  @media(max-width: 800px) {
    flex-flow: wrap column;
    justify-content: center;
  }
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
      <div>
      © {new Date().getFullYear()}, South Sound Guitar Repair
      </div>
      <div>
        <OutsideLink
          href="tel:(253) 220-3525"
        >
          (253) 220-3525
        </OutsideLink>
      </div>
    </InfoBoxes>
    <InfoBoxes>
      <SocialIcon
          url="https://instagram.com/southsoundguitars"
          style={{height: 25, width: 25}}
        />
    </InfoBoxes>
    <InfoBoxes>

      Built with
        {` `}
        <OutsideLink href="https://www.gatsbyjs.org">Gatsby</OutsideLink>
        by: <OutsideLink href="https://www.rjgrunau.com">Robert Grunau</OutsideLink>
    </InfoBoxes>
    </FooterContainer>
    </SiteFooter>
)
 
export default Footer;