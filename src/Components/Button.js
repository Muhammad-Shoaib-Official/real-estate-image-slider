import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
width:100px;
max-width: 200px;
display: flex;
justify-content: center;
align-items: center;
outline: none;
white-space: nowrap;
border: none;
cursor: pointer;
color: #fff;
font-size: 1rem;
background-color: #000;
padding: 0.8rem 1rem;
border-radius: 5px;
text-decoration: none;
transition: 0.5s;
&:hover{ 
    transform: translateY(2px);
}
`;