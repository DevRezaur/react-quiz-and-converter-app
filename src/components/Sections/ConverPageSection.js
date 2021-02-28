import React, { useState } from 'react'
import { Container } from '../../GlobalStyles'
import { GridWrapper,
    Heading, 
    Image, 
    LeftSection, 
    RightSection, 
    SubHeading, 
    ButtonModified,
    InputBox,
    OutputBox,
    Dropdown } from './ConverterPageSection.elements'

const ConverPageSection = () => {

    const dropdownlist = ['Bangladeshi TK', 'Indian Rupee', 'Dollar', 'Euro', 'Malaysian Ringgit'];
    const [currency1, setCurrency1] = useState('Bangladeshi TK');
    const [inputAmount, setInputAmount] = useState('');
    const [currency2, setCurrency2] = useState('Malaysian Ringgit');
    const [outputAmount, setOutputAmount] = useState('');

    const convert = () =>  {
        if(inputAmount === '')
        {
            alert("Field cannot be null !!!");
            return;
        }
        
        const amount = parseInt(inputAmount);
        if(currency1 === 'Bangladeshi TK') {
            if(currency2 === 'Dollar') {
                setOutputAmount((amount / 80).toFixed(3));
            } else if(currency2 === 'Euro') {
                setOutputAmount((amount / 95).toFixed(3));
            } else if(currency2 === 'Malaysian Ringgit') {
                setOutputAmount((amount / 21).toFixed(3));
            } else if(currency2 === 'Indian Rupee') {
                setOutputAmount((amount / 1.16).toFixed(3));
            }     
        } else if(currency1 === 'Euro') {
            if(currency2 === 'Dollar') {
                setOutputAmount((amount / 80).toFixed(3));
            } else if(currency2 === 'Malaysian Ringgit') {
                setOutputAmount((amount / 0.20).toFixed(3));
            } else if(currency2 === 'Indian Rupee') {
                setOutputAmount((amount / 0.011).toFixed(3));
            } else if(currency2 === 'Bangladeshi TK') {
                setOutputAmount((amount / 0.0097).toFixed(3));
            }    
        } else if(currency1 === 'Dollar') {
            if(currency2 === 'Euro') {
                setOutputAmount((amount / 1.22).toFixed(3));
            } else if(currency2 === 'Malaysian Ringgit') {
                setOutputAmount((amount / 0.25).toFixed(3));
            } else if(currency2 === 'Indian Rupee') {
                setOutputAmount((amount / 0.014).toFixed(3));
            } else if(currency2 === 'Bangladeshi TK') {
                setOutputAmount((amount / 0.012).toFixed(3));
            }    
        } else if(currency1 === 'Indian Rupee') {
            if(currency2 === 'Dollar') {
                setOutputAmount((amount / 73.22).toFixed(3));
            } else if(currency2 === 'Euro') {
                setOutputAmount((amount / 88.91).toFixed(3));
            } else if(currency2 === 'Malaysian Ringgit') {
                setOutputAmount((amount / 18.01).toFixed(3));
            } else if(currency2 === 'Bangladeshi TK') {
                setOutputAmount((amount / 0.86).toFixed(3));
            }
        } else if(currency1 === 'Malaysian Ringgit') {   
            if(currency2 === 'Dollar') {
                setOutputAmount((amount / 4.05).toFixed(3));
            } else if(currency2 === 'Euro') {
                setOutputAmount((amount / 4.92).toFixed(3));
            } else if(currency2 === 'Indian Rupee') {
                setOutputAmount((amount / 0.055).toFixed(3));
            } else if(currency2 === 'Bangladeshi TK') {
                setOutputAmount((amount / 0.048).toFixed(3));
            }  
        }
    }

    return (
        <>
            <Container>
                <GridWrapper>
                    <LeftSection>
                        <Image src={require('../../images/currency.svg').default} alt="coder" />
                    </LeftSection>
                    <RightSection>
                        <Heading>
                            Currency Converter
                        </Heading>
                        <SubHeading>
                            Currency From
                        </SubHeading>
                        <Dropdown value={currency1} onChange={(e) => setCurrency1(e.target.value)} >
                            {
                                dropdownlist.map(list => (
                                    <option
                                        key={list}
                                        value={list}
                                    >
                                        {list}
                                    </option>
                            ))}
                        </Dropdown>
                        <InputBox type="number" value={inputAmount} onChange={(e) => setInputAmount(e.target.value)} />
                        <SubHeading>
                            Currency To
                        </SubHeading>
                        <Dropdown value={currency2} onChange={(e) => setCurrency2(e.target.value)} >
                            {
                                dropdownlist.map(list => (
                                    <option
                                        key={list}
                                        value={list}
                                    >
                                        {list}
                                    </option>
                            )).reverse()}
                        </Dropdown>
                        <OutputBox value={outputAmount} disabled />
                        <ButtonModified primary={true} onClick={convert}>
                            Convert Currency
                        </ButtonModified>
                    </RightSection>
                </GridWrapper>
            </Container>
        </>
    )
}

export default ConverPageSection