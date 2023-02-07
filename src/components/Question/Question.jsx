import React from 'react'
import {decode} from 'html-entities';
import "./Question.css"

function Question({question}) {
  return (
    <div className="question-container">
      <h3 className="question-title">{decode(question)}</h3>
      <div className="question-option-container">
        <button className="question-option-btn-select">Adiós</button>
        <button className="question-option-btn-noselect">Adiós</button>
      </div>
    </div>
  )
}

export default Question