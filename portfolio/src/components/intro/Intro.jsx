import React from 'react'
import './intro.css'
import Movedown from '../movedown/Movedown'

function Intro() {
  return (
    <div className='intro'>
        <p id='name-intro'> Atharva Joshi - Works with Flutter / MERN Stack </p>
        <div className='heading'> <h1> A </h1> <h1 id='minimialist'> Minimialist </h1> <h1> Developer </h1> </div>
        <div className='heading'><h1> And </h1> <h1 id='passionate'> Passionate </h1> <h1> Problem-solver </h1> </div>
        <Movedown/>
        
        
    </div>
  )
}

export default Intro