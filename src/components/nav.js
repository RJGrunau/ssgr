import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Links = [
  {to: '/contact', title: 'Contact'},
  {to: '/gallery', title: 'Gallery'},
  {to: '/about',title: 'About'}
]

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
const InnerLinks = styled(Link)`
  color: #f3f3f3;
  text-decoration: none;
`

export default () => {
  return (
    <SiteNav>
      {Links.map( link => {
        const { to, title } = link

        return(
          <InnerLinks
            key={title}
            title={title}
            to={to}
          >
            {title}
          </InnerLinks>
        )
      })}
      {/* <NavDivs>Contact</NavDivs>
      <NavDivs>Gallery</NavDivs>
      <NavDivs>About</NavDivs> */}
    </SiteNav>
  )
}