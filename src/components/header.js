import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'


import Nav from '../components/nav'


const SiteHeader = styled.header`
  background: rgba(15,15,15,1);
  margin-bottom: 1.45rem;
  box-shadow:  2px 2px rgba(255,255,240, 0.4);
`
const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 1.45rem 1.0975rem;
  position: relative;
  height: 90px;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: baseline;
  @media(max-width: 800px){
    justify-content: center;
    height: 115px;
  }
`
const SiteHeadline = styled.h1`
  margin: 0;
  width: 40%;
  font-family: 'Open Sans';
  font-weight: 300;
  letter-spacing: 2px;
  padding-bottom: 10px;
  
  @media(max-width: 800px){
    width: 100%;
    font-size: 20pt;
    display: flex;
    justify-content: center;
    letter-spacing: normal;
    margin-bottom: 15px;
  }
`
const HomeLink = styled(Link)`
  color: rgba(243,243,243,1);
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <HeaderWrapper>
      <SiteHeadline>
        <HomeLink
          to="/"
        >
          {siteTitle}
        </HomeLink>
      </SiteHeadline>
      <Nav/>
    </HeaderWrapper>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header