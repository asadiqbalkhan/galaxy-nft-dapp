import React, { useState, useEffect } from 'react'

import {ButtonWrapper, AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TopLine, TextWrapper, Heading, ImgWrap} from './AboutElements'
import {Button} from '../ButtonElement'

import {ReactComponent as Image} from '../../images/tostars.svg'
const About = () => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav, [])
    })

    return (
        <AboutContainer id="about" scrollNav={scrollNav}>
            <AboutWrapper>
                <AboutRow>
                    <Column1>
                    <TextWrapper>
                        <TopLine>
                        Create Your Own Decentralized Universe 
                        </TopLine>
                        <Heading>
                            Road to NFT
                        </Heading>
                    </TextWrapper>
                    <ButtonWrapper>
                        <Button to="nft" smooth={true} duration={500} spy={true} exact='true' offset={80}>
                            Create Galaxy
                        </Button>
                        <Button to="collection" smooth={true} duration={500} spy={true} exact='true' offset={80}>
                           View Collection
                        </Button>
                        <Button to="transfer">
                            Transfer Planet
                        </Button>
                    </ButtonWrapper>
                    </Column1>
                    <Column2>
            
                    <ImgWrap>
                        <Image width='400px' height='400px' />
                    </ImgWrap>
                    </Column2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About
