import React ,{useState, useRef, useEffect} from 'react';
import { Button } from '../Button';


import left from '../images/leftarrow.png';
import right from '../images/rightarrow.png';


import {HeroSection, HeroWrapper, HeroSlider, HeroImage, HeroContent, HeroBtn, SliderBtn, PreArrow, NextArrow, HeroSlide } from './Hero.element';

function Hero( {slides}) {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeOut = useRef(null)

useEffect(() => {
    const nextSlide = () =>{
        setCurrent(current === length-1 ? 0 : current + 1)
    }
    timeOut.current = setTimeout(nextSlide,3000)

    return function () {
        if(timeOut.current) {
            clearTimeout(timeOut.current)
        }
    };

}, [current, length])


    const nextSlide = () =>{
        setCurrent(current === length-1 ? 0 : current +1 )

        console.log(current)
    };

    const prevSlide = () =>{
        setCurrent(current === 0 ? length -1 : current - 1)

        console.log(current)
    };

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }


    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return(
                        <HeroSlider key={index}>
                            {index === current && (

                                 <HeroSlide>
                            <HeroImage src={slide.image}/>
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <HeroBtn>
                                        <Button>{slide.label}</Button>
                                    </HeroBtn>
                                </HeroContent>
                                </HeroSlide>
                            )}  
                        </HeroSlider>
                    )
                })}
                <SliderBtn>
                    <PreArrow  src={left} alt='LeftArrow' onClick={prevSlide}/>
                    <NextArrow src={right} alt='RightArrow' onClick={nextSlide}/>
                </SliderBtn>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
