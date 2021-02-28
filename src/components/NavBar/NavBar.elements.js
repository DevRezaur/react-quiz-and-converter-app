import styled from 'styled-components';
import { FaUniversity } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../GlobalStyles';

export const Nav = styled.nav`
    background-color: #101522;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const NavContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
`;

export const NavLogo = styled(Link)`
    display: flex;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    align-items: center;

    &:hover {
        border-bottom: 2px solid #4b59f7;
    }
`;

export const NavIcon = styled(FaUniversity)`
    margin-right: 1rem;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 800px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 70%);
        font-size: 1.8rem;
        color: #fff;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        background: #101522;
        width: 100%;
        height: calc(100vh - 80px);
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? '0' : '-100%')};
        transition: all 0.5s ease;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        border-bottom: 2px solid #4b59f7;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        
        &:hover {
            border: none;
        }
    }
`;

export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    width: 100%;
    text-align: center;

    @media screen and (max-width: 800px) {   
        padding: 2rem;

        &:hover{
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
`;