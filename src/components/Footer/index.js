import React from 'react'



import {FooterContainer,
        FooterLinksContainer,
        FooterLinksWrapper,
        FooterWrap,
        FooterLinkItems,
        FooterLink,
        FooterLinkTitle,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        WebsiteRights,
        SocialIcons,
        SocialIconLink
             } from './FooterElements'
import {FaLinkedin, FaYoutube, FaTwitter, FaGithub} from 'react-icons/fa'

import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const togglehome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us </FooterLinkTitle>
                                <FooterLink> How it works</FooterLink>
                                <FooterLink> Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Videos </FooterLinkTitle>
                                <FooterLink a='/'> Tutorials</FooterLink>
                                <FooterLink> Learn Blockchain</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us </FooterLinkTitle>
                                <FooterLink> Contact </FooterLink>
                                <FooterLink> Support </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                                <FooterLink> LinkedIn </FooterLink>
                                <FooterLink> Facebook </FooterLink>
                                <FooterLink> Youtube </FooterLink>
                                <FooterLink> Github </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick="{togglehome}"> Galaxy  </SocialLogo>
                        <WebsiteRights> Galaxy &copy; 2021 All rights reserved </WebsiteRights>
                        <SocialIcons />
                        <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="GitHub">
                            <FaGithub />
                        </SocialIconLink>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
