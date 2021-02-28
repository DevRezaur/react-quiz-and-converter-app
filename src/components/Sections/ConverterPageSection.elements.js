import styled from 'styled-components';
import { Button } from '../../GlobalStyles';

export const GridWrapper = styled.div`
    min-height: -moz-calc(100vh - 197px);
    min-height: -webkit-calc(100vh - 197px);
    min-height: -o-calc(100vh -197px);
    min-height: calc(100vh - 197px);
    display: grid;
    grid-template-areas: "left-section"
                        "right-section";
    row-gap: 32px;

    @media screen and (min-width: 800px) {
        grid-template-areas: "left-section right-section";
        column-gap: 32px;
    }
`;

export const LeftSection = styled.div`
    grid-area: "left-section";
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
    grid-area: "right-section";
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
    margin-top: 2rem;
`;

export const Dropdown = styled.select`
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 10px 0px 20px 0px;
`;

export const InputBox = styled.input`
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
`;

export const OutputBox = styled.input`
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
`;

export const ButtonModified = styled(Button)`
    margin: 50px 0px;
    width: 100%;
`;