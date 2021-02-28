import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }

    html {
        width: 100%;
        overflow-x: hidden;
    }

    body {
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 60px;
    padding-right: 60px;

    @media screen and (max-width: 800px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`;

export const Button = styled.button`
    color: ${({primary}) => (primary ? '#fff' : '#101522')};
    background: ${({primary}) => (primary ? '#101522' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    border-radius: 4px;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${({primary}) => (primary ? '#fff' : '#101522')};
        color: ${({primary}) => (primary ? '#101522' : '#fff')};
        border: 1px solid #101522;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export default GlobalStyle