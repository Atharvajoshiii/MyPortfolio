import React from 'react'
import './aboutme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Mouse from '../../components/mouse/Mouse'

import Social from '../../components/social/Social'

function Aboutme() {
  return (
    
    <div className='aboutme'>
      <p className='about'>
        Myself <p id='name'> Atharva Joshi </p>
      </p>
      <p className='about'>
        a 2nd year B-TECH CSE student
      </p>
      <p className='about'>
        i am a passionate app / web developer
      </p>   
      <p className='about' id='skills'>
        Skills
      </p>   
      <div className='icons-name'>
      <img src='./javascript.svg' className='icons'/>
      <img src='./android.png' className='icons'/>
      <img src='./c.png' className='icons'/>
      <img src='./dart.png' className='icons'/>
      <img src='./flutter.png' className='icons'/>
      <img src='./java.png' className='icons'/>
      <img src='./mongodb.png' className='icons'/>
      </div>

      <div className='icons-name'>
      <img src='./mysql.png' className='icons'/>
      <img src='./nodejs.png' className='icons'/>
      <img src='./php.png' className='icons'/>
      <img src='./python.png' className='icons'/>
      <img src='./cpp.png' className='icons'/>
      
      </div>
      <div className='mouse'>
      <Mouse/>
      </div>
      
    </div>
    
  )
}

export default Aboutme