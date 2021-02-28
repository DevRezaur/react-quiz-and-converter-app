import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../GlobalStyles';

export const GridWrapper = styled.div`
    min-height: -moz-calc(100vh - 197px);
    min-height: -webkit-calc(100vh - 197px);
    min-height: -o-calc(100vh -197px);
    min-height: calc(100vh - 197px);
    display: grid;
    grid-template-areas: "left-section"
                        "right-section"
                        "bottom-section";
    row-gap: 32px;
    column-gap: 32px;

    @media screen and (min-width: 800px) {
        grid-template-areas: "left-section right-section"
                        "bottom-section bottom-section";
    }
`;

export const LeftSection = styled.div`
    grid-area: left-section;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 250px;
    padding: 24px 0;
    margin-top: 60px;

    @media screen and (min-width: 800px) {
        min-height: 500px;
    }
`;

export const RightSection = styled.div`
    grid-area: right-section;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 250px;
    padding: 24px 0;

    @media screen and (min-width: 800px) {
        min-height: 500px;
        justify-content: center;
    }
`;

export const Image = styled.img`
    width: 100%;
    max-width: 500px;
    height: auto;
`;

export const Heading = styled.h1`
    font-size: 2rem;
    color: #252a2e;
    margin-bottom: 0.3em;
`;

export const SubHeading = styled.p`
    font-size: 1rem;
    color: darkgray;
    margin-bottom: 20px;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
`;

export const ButtonModified = styled(Button)`
    margin-top: 20px;
    width: 100%;
`;

export const QuoteSection = styled.div`
    grid-area: bottom-section;
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
`;

export const Quote = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 4px;
    margin-bottom: 40px;
    padding: 10px;
    height: 50px;
`;