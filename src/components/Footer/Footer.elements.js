import { FaUniversity } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../GlobalStyles';

export const FooterContainer = styled.div`
    background: #101522;
    padding: 2rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SocialMediaContainer = styled(Container)`
    width: 100%;
`;

export const SocialMediaWrap = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto 0 auto;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const BrandLogo = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    margin-bottom: 16px;

    &:hover {
        transition: all 0.3s ease-out;
        color: #4b59f7;
    }
`;

export const WebsiteIcon = styled(FaUniversity)`
    margin-right: 10px;
`;

export const WebsiteRights = styled.small`
    color: #fff;
    font-size: 16px;

    @media screen and (max-width: 800px) {
        margin-bottom: 16px;
    }
`;

export const SocialMediaIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialMediaLink = styled.a`
    color: #fff;
    font-size: 24px;

    &:hover {
        transition: all 0.3s ease-out;
        color: #4b59f7;
    }
`;