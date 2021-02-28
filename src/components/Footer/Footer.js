import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BrandLogo, FooterContainer, SocialMediaContainer, SocialMediaIcon, 
    SocialMediaLink, SocialMediaWrap, WebsiteIcon, WebsiteRights } from './Footer.elements'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <SocialMediaContainer>
                    <SocialMediaWrap>
                        <BrandLogo to='/'>
                            <WebsiteIcon />
                            JS App
                        </BrandLogo>
                        <WebsiteRights>Designed By &nbsp;&copy; Dev Rezaur</WebsiteRights>
                        <SocialMediaIcon>
                            <SocialMediaLink href='/' targer='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialMediaLink>
                            <SocialMediaLink href='/' targer='_blank' aria-label='Youtube'>
                                <FaYoutube />
                            </SocialMediaLink>
                            <SocialMediaLink href='/' targer='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialMediaLink>
                            <SocialMediaLink href='/' targer='_blank' aria-label='LinkedIn'>
                                <FaLinkedin />
                            </SocialMediaLink>
                        </SocialMediaIcon>
                    </SocialMediaWrap>
                </SocialMediaContainer>
            </FooterContainer>
        </>
    )
}

export default Footer