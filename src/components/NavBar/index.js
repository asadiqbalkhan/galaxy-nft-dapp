import React from 'react'

import {Nav, NavbarContainer, NavLogo, NavMenu, NavLinks, NavItem} from './NavBarElements'

//import { animateScroll as scroll } from 'react-scroll'

const NavBar = () => {
    
    return (
        <>
            <Nav >
                <NavbarContainer>
                    <NavLogo >
                    Galaxy
                    </NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                             >about</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='nft'
                             >nft</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='collection'
                             >universe</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default NavBar
