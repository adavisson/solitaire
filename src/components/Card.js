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
          <div className='top-index'>
            3<br />
            &spades;
          </div>
          <div className='card-center'>&spades;</div>
          <div className='bottom-index'>
            3<br />
            &spades;
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
