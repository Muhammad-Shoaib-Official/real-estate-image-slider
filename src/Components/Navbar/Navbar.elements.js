import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
// import {FaBars} from 'react-icon/fa'
import menu from '../images/menu.png';

export const Nav = styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap: wrap;
height: 60px;
width: 100%;
padding: 0 2rem;
position: fixed;
background-color: transparent;
z-index: 100;
transition: 1s;
&:hover{
    background-color: red;
}
`;
const NavLink = css`
margin: 0 1rem;
pad: 0 1rem;
color: #fff;
text-decoration: none;
`;
export const Logo = styled(Link)`
${NavLink}
font-style: italic;
font-weight: 900;
`;
export const NavMenu = styled.div`
display: flex;
align-items: center;

@media screen and (max-width:768px){
    display: none;
}
`;
export const NavMenuLinks = styled(Link)`
${NavLink}
`;
export const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 1.5rem;

@media screen and (max-width:768px){
    display: none;
}
`;
export const MenuBars = styled.i`
display: none;

@media screen and (max-width:768px){
    display: block;
    background-image: url(${menu});
    background-size: contain;
    height: 30px;
    width: 30px;
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%,50%);

}
`;
