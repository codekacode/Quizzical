import React, { useEffect, useState } from 'react'
import getQuestions from '../../services/getQuestions'
import Question from '../Question/Question'
import { nanoid } from 'nanoid'
import "./QuestionList.css"

function QuestionList() {
  const [questionsArray, setQuestionsArray] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const allQuestionsAnswered = questionsArray.every(question => question.selectedAnswer !== "");

  useEffect(() => {
    getQuestions().then(questions => {
      setQuestionsArray(questions.map(question => {
        return {
          ...question,
          id: nanoid(),
          selectedAnswer: "",
        }
      }))
    })
  }, [])

  console.log(questionsArray);

  const handleSelectAnswer = (questionId, answer) => {
    setQuestionsArray(prevQuestionsArray => (
      prevQuestionsArray.map(question => (
        question.id === questionId ? {...question, selectedAnswer: answer} : question
      ))
    ))
  }

  const checkAnswers = () => {
    if(allQuestionsAnswered){
      setIsGameOver(true)
    }
  }

  const resetGame = () => {
    setIsGameOver(false)
  }

  const questionItems = questionsArray.map(question => (
    <Question
      id={question.id}
      question={question.question}
      correctAnswer={question.correct_answer}
      incorrectAnswer={question.incorrect_answers}
      selectedAnswer={question.selectedAnswer}
      handleSelectAnswer={handleSelectAnswer}
    />
  ))

  return (
    <div className="question-list-container">
      {questionItems}
      <button className="question-sent__btn" onClick={isGameOver ? resetGame : checkAnswers}>{isGameOver ? "Play Again" : "Check Answers"}</button>
    </div>
  )
}

export default QuestionList