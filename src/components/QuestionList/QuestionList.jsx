import React, { useEffect, useState } from 'react'
import getQuestions from '../../services/getQuestions'
import Question from '../Question/Question'
import "./QuestionList.css"

function QuestionList() {
  const [questionsArray, setQuestionsArray] = useState([]);

  useEffect(() => {
    getQuestions().then(questions => {
      setQuestionsArray(questions.map(question => {
        return {
          ...question
        }
      }))
    })
  }, [])

  console.log(questionsArray);

  const questionItems = questionsArray.map(question => (
    <Question
      question={question.question}
      correctAnswer={question.correct_answer}
      incorrectAnswer={question.incorrect_answers}
    />
  ))

  return (
    <div className="question-list-container">
      {questionItems}
      <button className="question-sent__btn">Check answers</button>
    </div>
  )
}

export default QuestionList