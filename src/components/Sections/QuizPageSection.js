import React, { useEffect, useState } from 'react';
import { Questions } from '../../data/Questions';
import { Container } from '../../GlobalStyles';
import {
    WrapperDiv, 
    PageTitle,
    StartingDiv,
    SubTitle,
    NumberOfQues,
    InputBox,
    EditedButton,
    QuestionDiv,
    Question,
    OptionBox,
    Option,
    ResultDiv,
    ScoreBox,
    SubText,
    ImageBox1, 
    ImageBox2, 
    Image,
    NavLink} from './QuizPageSection.elements';

const QuizPageSection = () => {
    const [score, setScore] = useState(0);
    const [totalCorrected, setTotalCorrected] = useState(0);
    const [totalFalse, setTotalFalse] = useState(0);
    const [quizState, setQuizState] = useState("");
    const [totalQuestion, setTotalQuestion] = useState(0);
    const [questionSet, setQuestionSet] = useState([]);
    const [questionCounter, setQuestionCounter] = useState(0);
    const [correctState, setCorrectState] = useState({
        "A" : '',
        "B" : '',
        "C" : '',
    });
    const [currentQuestion, setCurrentQuestion] = useState({
        "question": "",
        "choice1": "",
        "choice2": "",
        "choice3": "",
        "correctAns": 0,
    });

    useEffect(() => {
        setQuestionSet([...Questions]);
    }, []);

    const getNewQuestion = () => {
        if(questionCounter >= totalQuestion) {
            setQuizState("end");
        } else {
            setQuestionCounter(questionCounter + 1);
            let quesIndex = Math.floor(Math.random() * questionSet.length);
            setCurrentQuestion({
                "question": questionSet[quesIndex].question,
                "choice1": questionSet[quesIndex].choice1,
                "choice2": questionSet[quesIndex].choice2,
                "choice3": questionSet[quesIndex].choice3,
                "correctAns": questionSet[quesIndex].correctAns,
                });
            questionSet.splice(quesIndex, 1);
        }
     }

    const checkResult = (x) => {
        if(currentQuestion.correctAns === x) {   
            setScore(score + (100 / parseInt(totalQuestion))); 
            setTotalCorrected(totalCorrected + 1);

            const selected = {}
            selected[x] = 'correct';
            setCorrectState({...correctState, ...selected});
    
            setTimeout(() => {
                delete selected[x];
                setCorrectState({...correctState, ...selected});
                getNewQuestion();
            }, 1000);
        } else {
            setTotalFalse(totalFalse + 1);

            const selected = {}
            selected[x] = 'false';
            selected[currentQuestion.correctAns] = 'correct';
            setCorrectState({...correctState, ...selected});

            setTimeout(() => {
                delete selected[x];
                delete selected[currentQuestion.correctAns];
                setCorrectState({...correctState, ...selected});
                getNewQuestion();
            }, 1000);
        }
    };

    const startQuiz = () => {
        if(totalQuestion >10 || totalQuestion <1)
        {
            alert("Please select between 1-10");
            return;
        }
        setQuizState("running");
        getNewQuestion();
    };

    return (
        <>
            <Container>
                <WrapperDiv>
                    <PageTitle isVisible={quizState}>
                        MCQ Quiz
                    </PageTitle>
                    <SubTitle isVisible={quizState}>
                        Only select the correct answer to gain marks.
                    </SubTitle>
                    <StartingDiv isVisible={quizState}>
                        <ImageBox1>
                            <Image src={require('../../images/exam.svg').default} alt="coder" />
                        </ImageBox1>
                        <NumberOfQues>
                            How Many Questions Do you Want? Choose Between 1-10.
                        </NumberOfQues>
                        <InputBox type="number" value={totalQuestion} onChange={(e) => setTotalQuestion(e.target.value)} />
                        <EditedButton onClick={startQuiz}>Start Quiz</EditedButton>
                    </StartingDiv>
                    <QuestionDiv isVisible={quizState}>
                        <Question>
                                {currentQuestion.question}
                        </Question>
                        <OptionBox>
                            <Option correct={correctState.A} onClick={() => checkResult("A")}>
                                {currentQuestion.choice1}
                            </Option>
                            <Option correct={correctState.B} onClick={() => checkResult("B")}>
                                {currentQuestion.choice2}
                            </Option>
                            <Option correct={correctState.C} onClick={() => checkResult("C")}>
                                {currentQuestion.choice3}
                            </Option>
                        </OptionBox>
                    </QuestionDiv>
                    <ResultDiv isVisible={quizState}>
                        <ImageBox2>
                            <Image src={require('../../images/exam.svg').default} alt="coder" />
                        </ImageBox2> 
                        <ScoreBox>
                            <SubText>
                                Obtained Score: {score.toFixed(2)}
                            </SubText>
                            <SubText>
                                Total Corrected: {totalCorrected}
                            </SubText>
                            <SubText>
                                Total False: {totalFalse}
                            </SubText>
                        </ScoreBox>
                        <NavLink to='/'>
                            <EditedButton primary>
                                Back to Homepage
                            </EditedButton>
                        </NavLink>
                    </ResultDiv>
                </WrapperDiv>
            </Container>
        </>
    )
}

export default QuizPageSection