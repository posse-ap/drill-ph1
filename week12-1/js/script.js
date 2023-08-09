"use strict";

const subjectElements = document.querySelectorAll('.list_item_score')
const totalButton = document.querySelector('.total_button')
const totalElement = document.querySelector('.total')

const scores = {
  'science': 60,
  'japanese': 30,
  'math': 40,
  'society': 50,
  'english': 40,
}

subjectElements.forEach(subjectElement => {
  const subject = subjectElement.dataset.subject
  subjectElement.innerHTML = scores[subject]
})

const sumScores = (scores) => {
  return scores.reduce((sum, currentScore) => sum + currentScore)
}

totalButton.addEventListener('click', () => {
  totalElement.innerHTML = sumScores(scores)
})


