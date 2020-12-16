import React, { useState } from 'react'
import './Progress-summary.scss';

const ProgressSummary = ({ completedCount, progressPercentage, resetProgress }) => {

  return (
    <div class="progress-summary">
      <div class="progress-bar-wrapper">
        <span class="progress-bar" style={{ width: `${progressPercentage}%` }}></span>
      </div>
      <div class="progress-count">{completedCount}</div>
      <button className="reset-button" onClick={resetProgress}><i className="fas fa-undo-alt"></i></button>
    </div>
  )
}

export default ProgressSummary
