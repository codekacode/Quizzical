import React from 'react'
import "./Question.css"

function Question() {
  return (
    <div className="question-container">
      <h3 className="question-title">How would one say goodbye in Spanish?</h3>
      <div className="question-option-container">
        <button className="question-option-btn-select">Adiós</button>
        <button className="question-option-btn-noselect">Adiós</button>
      </div>
    </div>
  )
}

export default Question