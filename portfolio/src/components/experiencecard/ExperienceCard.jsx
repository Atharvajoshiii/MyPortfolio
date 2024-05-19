import React from 'react'
import './experiencecard.css'

function ExperienceCard({title,description}) {
  return (
    <div class="notification">
    <div class="notiglow"></div>
    <div class="notiborderglow"></div>
    <div class="notititle"> {title} </div>
    <div class="notibody"> {description} </div>
  </div>
  )
}

export default ExperienceCard