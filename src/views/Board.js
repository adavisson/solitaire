import React from 'react'
import Card from '../components/Card'

const Board = () => {
  return (
    <div className='board'>
      <Card className='drag' value='3' suit='spades' />
    </div>
  )
}

export default Board
