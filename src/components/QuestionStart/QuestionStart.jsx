
import React from 'react'
import "./QuestionStart.css"

function QuestionStart() {
  return (
    <div className="question-start">
      <h1 className="question-start__title">Quizzical</h1>
      <p className="question-start__title--description">Some description if needed</p>
      <button className="question-start__button">Start quiz</button>
    </div>
  )
}

export default QuestionStart