import React from 'react'
import {decode} from 'html-entities';
import "./Question.css"

function Question(props) {

  const incorrectAnswersItems = props.incorrectAnswer

  const correctAnswersItems = props.correctAnswer

  console.log(correctAnswersItems)

  const totalAnswers = [...incorrectAnswersItems, correctAnswersItems]
  console.log(totalAnswers)

  const allAnswers = totalAnswers.map(answer => {
    const styledAnswers = `${props.selectedAnswer === answer ? "question-option-btn" : "question-option-btn-select"}`
    return <button className={styledAnswers} onClick={()=> props.handleSelectAnswer(props.id, answer)}>{decode(answer)}</button>
  })

  const sortedAnswerItems = allAnswers.sort((a, b) => (
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