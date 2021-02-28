import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { 
    Nav, 
    NavContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink } from './NavBar.elements';

const NavBar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to='/' onClick={closeMobileMenu}>
                        <NavIcon />
                        JS App
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu click={click}>
                        <NavItem>
                            <NavLink to='/' onClick={closeMobileMenu}>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/quiz-page' onClick={closeMobileMenu}>
                                Online Quiz
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/converter-page' onClick={closeMobileMenu}>
                                Currency Converter
                            </NavLink>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default NavBar