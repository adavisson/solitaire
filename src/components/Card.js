import React, { useState } from 'react'

const Card = () => {
  const [facedown, setFacedown] = useState(false)

  const flip = () => {
    setFacedown(!facedown)
  }

  return (
    <div className='card' onClick={flip}>
      {!facedown && (
        <div className='card-front'>
          <div className="card-center">&spades;</div>
        </div>
      )}
    </div>
  )
}

export default Card
