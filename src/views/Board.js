import React from 'react'
import Card from '../components/Card'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Board = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='board'>
        <Card className='drag' value='3' suit='spades' />
      </div>
    </DndProvider>
  )
}

export default Board
