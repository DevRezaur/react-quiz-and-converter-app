import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../GlobalStyles';

export const WrapperDiv = styled.div`
    min-height: -moz-calc(100vh - 197px);
    min-height: -webkit-calc(100vh - 197px);
    min-height: -o-calc(100vh -197px);
    min-height: calc(100vh - 197px);
    overflow: auto;
`;

export const PageTitle = styled.h1`
    display: ${({isVisible}) => (isVisible === "end" ? 'none' : 'block')};
    font-size: 2rem;
    color: #252a2e;
    padding: 4rem 1rem 0 1rem;
    text-align: center;
`;

export const SubTitle = styled.p`
    display: ${({isVisible}) => (isVisible === "end" ? 'none' : 'block')};
    font-size: 1rem;
    color: darkgray;
    margin-top: 0.5rem;
    margin-bottom: 4rem;
    text-align: center;
`;

export const StartingDiv = styled.div`
    background-color: #101522;
    color: #fff;
    margin: 0 auto 80px auto;
    padding: 2rem 1.5rem;
    width: 100%;
    max-width: 800px;
    border-radius: 4px;
    display: ${({isVisible}) => (isVisible === "" ? 'grid' : 'none')};
    grid-template-areas: "NumberOfQues"
                        "InputBox"
                        "EditedButton"
                        "ImageBox";
    
    row-gap: 1rem;
    column-gap: 2rem;

    @media screen and (min-width: 800px) {
        grid-template-areas:
                        "NumberOfQues NumberOfQues"
                        "InputBox EditedButton"
                        "ImageBox ImageBox";
        padding: 4rem 2rem;
    }
`;

export const NumberOfQues = styled.p`
    grid-area: NumberOfQues;
    color: #fff;
    font-size: 1.1rem;
    margin-bottom: 2rem;
`;

export const InputBox = styled.input`
    grid-area: InputBox;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px; 
`;

export const NavLink = styled(Link)`
    text-decoration: none;
`;

export const EditedButton = styled(Button)`
    grid-area: EditedButton;
    background-color: ${({primary}) => (primary ? '#fff' : '#101522')};
    color: ${({primary}) => (primary ? '#101522' : '#fff')};
    border-radius: 3px;
    border: 1px solid #fff;
    width: 100%;

    &:hover {
        background-color: ${({primary}) => (primary ? '#101522' : '#fff')};
        color: ${({primary}) => (primary ? '#fff' : '#101522')};
        border: 1px solid #fff;
    }
`;

export const QuestionDiv = styled.div`
    display: ${({isVisible}) => (isVisible === "running" ? 'block' : 'none')};
    background-color: #101522;
    color: #fff;
    margin: 0 auto 3rem auto;
    padding: 2rem 1.5rem;
    width: 100%;
    max-width: 800px;
    border-radius: 4px;
`;

export const Question = styled.p`
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 2rem;
`;

export const OptionBox = styled.div`

`;

export const Option = styled.p`
    font-size: 1.2rem;
    background-color: ${({correct}) => ((correct === 'correct' && 'green') ||
                                        (correct === 'false' && 'red') ||
                                        (correct === '' && '#101522'))};
    border: ${({correct}) => ((correct === 'correct' && 'none') ||
                                        (correct === 'false' && 'none') ||
                                        (correct === '' && '1px solid #fff'))};
    color: #fff;
    border-radius: 3px;
    padding: 5px 10px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: 35px;

    &:hover {
        background-color: ${({correct}) => ((correct === 'correct' && 'green') ||
                                        (correct === 'false' && 'red') ||
                                        (correct === '' && '#fff'))};
        color: ${({correct}) => ((correct === 'correct' && '#fff') ||
                                        (correct === 'false' && '#fff') ||
                                        (correct === '' && '#101522'))};
    } 
`;

export const Image = styled.img`
    width: 80%;
    max-width: 400px;
    height: auto;
    display: block;
    margin-right: auto;
    margin-left: auto;
`;

export const ImageBox1 = styled.div`
    grid-area: ImageBox;
    margin: 40px 20px;
`;

export const ImageBox2 = styled.div`
    margin-top: -200px;
    margin-bottom: 40px;
`;

export const ResultDiv = styled.div`
    display: ${({isVisible}) => (isVisible === "end" ? 'block' : 'none')};
    background-color: #101522;
    color: #fff;
    margin: 220px auto 80px auto;
    padding: 2.5rem 1.5rem;
    width: 100%;
    max-width: 800px;
    border-radius: 4px;

    @media screen and (min-width: 800px) {
        padding: 3.5rem 3rem;
    }
`;

export const ScoreBox = styled.div`
    margin-bottom: 30px;
`;

export const SubText = styled.p`
    font-size: 1.2rem;
    color: #fff;
    padding: 0.3rem 0.5rem;
    text-align: center;
`;