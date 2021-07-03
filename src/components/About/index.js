import React from 'react'

import {AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TopLine, TextWrapper, Heading, ImgWrap} from './AboutElements'
import ImageTest from  '../../images/earth.png'
const About = () => {
    return (
        <AboutContainer>
            <AboutWrapper>
                <AboutRow>
                    <Column1>
                    column 1
                    <TextWrapper>
                        <TopLine>
                        top line 
                        </TopLine>
                        <Heading>
                            heading
                        </Heading>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    column 2
                    <ImgWrap>
                        image goes here
                    </ImgWrap>
                    </Column2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About
