import React from 'react'
import {decode} from 'html-entities';
import "./Question.css"

function Question(props) {

  const incorrectAnswersItems = props.incorrectAnswer.map(answer => {
    return <button className="question-option-btn-select">{decode(answer)}</button>
  })

  const correctAnswersItems = <button className="question-option-btn-select">{decode(props.correctAnswer)}</button>

  incorrectAnswersItems.push(correctAnswersItems)

  const sortedAnswerItems = incorrectAnswersItems.sort((a, b) => (
    a.props.children.localeCompare(b.props.children)
  ))

  return (
    <div className="question-container">
      <h3 className="question-title">{decode(props.question)}</h3>
      <div className="question-option-container">
        {sortedAnswerItems}
      </div>
    </div>
  )
}

export default Question