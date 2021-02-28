import React, { useEffect, useState } from 'react';
import { Container } from '../../GlobalStyles';
import { GridWrapper,
    Heading, 
    Image, 
    LeftSection, 
    RightSection, 
    SubHeading, 
    ButtonModified, 
    QuoteSection, 
    Quote,
    NavLink } from './LandingPageSection.elements';

const LandingPageSection = () => {

    const [quote, setQuote] = useState('Quote 0');

    useEffect(() => {
        const quotes = ["You will definately get A+ in web engineering course 😊", 
                        "A fresh start will put you on your way ✌", 
                        "Today is the error free day indeed 🎉", 
                        "Bad luck! Your code will not run today 😢", 
                        "Have a great coding experience 😃"];
        const x = Math.floor(Math.random() * 5);
        setQuote(quotes[x]);
    }, []);

    return (
        <>
            <Container>
                <GridWrapper>
                    <LeftSection>
                        <Image src={require('../../images/coding.svg').default} alt="coder" />
                    </LeftSection>
                    <RightSection>
                        <Heading>
                            JavaScript Assignment
                        </Heading>
                        <SubHeading>
                            Please click to continue.
                        </SubHeading>
                        <NavLink to='/quiz-page'>
                            <ButtonModified  primary={true}>
                                Online Quiz
                            </ButtonModified>
                        </NavLink>
                        <NavLink to='/converter-page'>
                            <ButtonModified primary={true}>
                                Currency Converter
                            </ButtonModified>
                        </NavLink>
                    </RightSection>
                    <QuoteSection>
                        <Quote>
                            {quote}
                        </Quote>
                    </QuoteSection>
                </GridWrapper>
            </Container>
        </>
    )
}

export default LandingPageSection