import styled ,{css} from "styled-components/macro";
import left from '../images/leftarrow.png';
import right from '../images/rightarrow.png';



export const HeroSection = styled.section`
position: relative;
height: 100vh;
max-height: 1100px;
overflow-x: hidden;
`;
export const HeroWrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow-x: hidden;
position: relative;

`;
export const HeroSlider = styled.div`
z-index: 1;
height: 100%;
width: 100%;

&::before{
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(0deg,
        rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.2) 50%,
        rgba(0,0,0,0.6) 100%,);
}
`;
export const HeroSlide = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
export const HeroImage =styled.img`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh; 
object-fit: cover ;
`;
export const HeroContent = styled.div`
position: absolute;
left: 7.5%;
padding: 10px;
display: flex;
 flex-direction: column;
 max-width: 1600px;
 width: calc(100%-100px);
 color: #fff;
z-index: 5;

h1{
    font-size: clamp(1re, 8vw, 2rem);
    font-weight: 400;
    text-align: left;
    text-shadow: 0px 0px 10 rgba(0,0,0,0.4);
    text-transform: uppercase;
    margin-bottom: 10px;
}
p{
    margin-bottom: 0.8rem;
    text-shadow: 0px 0px 10 rgba(0,0,0,0.4);
}
`;

export const HeroBtn = styled.div`

`;
export const Arrow = styled.img`
`;
export const SliderBtn = styled.div`
display: flex;
align-items: center;
position: absolute;
bottom: 30px;
right: 30px;
z-index: 10;

@media screen and (max-width:768px){
    justify-content: center;
    bottom: 10px;
    right: auto;
    padding: 10px;
}
`;
const ArrowBtn = css`
width: 50px;
height: 50px;
margin-right: 1rem;
color: #fff;
background-color: red;
border-radius: 50%;
padding: 0.75rem;
transition: 0.3s ease;
user-select: none;
&:hover{
    background-color: goldenrod;
}
 
`;
export const PreArrow = styled.img`
${ArrowBtn}
/* background-image: ${left}; */
`;
export const NextArrow = styled.img`
${ArrowBtn}

/* background-image: ${right}; */

`;