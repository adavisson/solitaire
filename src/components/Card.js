import React, { useState, useEffect } from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../Constants'

const Card = (props) => {
  const [facedown, setFacedown] = useState(false)
  const [suit, setSuit] = useState('')
  const [position, setPosition] = useState(0)

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  useEffect(() => {
    switch(props.suit) {
      case 'clubs':
        setSuit('\u2663')
        break
      case 'diamonds':
        setSuit('\u2666')
        break
      case 'hearts':
        setSuit(`\u2665`)
        break
      case 'spades':
        setSuit('\u2660')
    }
  },[])

  const flip = () => {
    setFacedown(!facedown)
  }

  return (
    <div ref={drag} className='card' onClick={flip}>
      {!facedown && (
        <div className={props.suit === 'diamonds' || props.suit === 'hearts' ? 'card-front red' : 'card-front'}>
          <div className='top-index'>
            {props.value}<br />
            {suit}
          </div>
          <div className='card-center'>{suit}</div>
          <div className='bottom-index'>
            {props.value}<br />
            {suit}
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
