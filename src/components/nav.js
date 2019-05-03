import React from 'react'
import styled from 'styled-components'

const SiteNav = styled.nav`
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    @media(max-width: 800px;) {
        width: 100%;
        
    }
    
`
const NavDivs = styled.div`
    color: rgba(243,243,243,1);
    font-family: 'Open Sans';
    font-size: 18pt;
    font-weight: 200;
    letter-spacing: 2px;
    margin: 10px;
    padding: 5px;
`

export default () => {
  return (
    <SiteNav>
      <NavDivs>Contact</NavDivs>
      <NavDivs>Gallery</NavDivs>
      <NavDivs>About</NavDivs>
    </SiteNav>
  )
}