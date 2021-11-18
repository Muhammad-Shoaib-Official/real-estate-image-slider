import React from 'react';
import { menuData } from '../Data/MenuData';
import { Button } from '../Button';
import {Nav, Logo, NavMenu, NavMenuLinks, NavBtn, MenuBars
} from '../Navbar/Navbar.elements';

function Navbar() {
    return (
        <>
            <Nav>
                <Logo to='/'>Real-Estate</Logo>
                <MenuBars />
                <NavMenu>
                    {menuData.map((item,index)=>(
                        <NavMenuLinks to={item.link} key={index} >
                            {item.title}
                        </NavMenuLinks>
                    ))}
                </NavMenu>
                <NavBtn>
                    <Button to='/contact-us'>Contact Us</Button>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
