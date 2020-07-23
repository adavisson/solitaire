import React from 'react'
import Card from '../components/Card'
import Draggable from '../components/Draggable'

const Board = () => {
  return (
    <div className='board'>
      <Draggable>
        <Card className='drag' value='3' suit='spades' />
      </Draggable>
    </div>
  )
}

export default Board
