import React, { useState } from 'react'
import spade from '../assets/spade.png'

const Card = () => {
  const [facedown, setFacedown] = useState(false)

  const flip = () => {
    setFacedown(!facedown)
  }

  return (
    <div className='card' onClick={flip}>
      {!facedown && (
        <div className='card-front'>
          <img className='card-center' src={spade} alt="spade" />
        </div>
      )}
    </div>
  )
}

export default Card
