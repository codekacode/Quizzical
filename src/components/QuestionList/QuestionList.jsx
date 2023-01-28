import React from 'react'
import Question from '../Question/Question'
import "./QuestionList.css"

function QuestionList() {
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