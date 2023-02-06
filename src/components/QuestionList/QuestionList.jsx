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
  })
  return (
    <div className="question-list-container">
      <Question/>
      <Question/>
      <Question/>
      <button className="question-sent__btn">Check answers</button>
    </div>
  )
}

export default QuestionList