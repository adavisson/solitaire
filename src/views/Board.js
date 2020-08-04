import React from 'react'
import Card from '../components/Card'
import Space from '../components/Space'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Board = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='board'>
        <Space
          id='draw-stack'
          style={{ marginLeft: '1.5em', marginTop: '1.5em' }}
        >
          {/* <Card className='drag' value='3' suit='spades' /> */}
        </Space>
        
      </div>
    </DndProvider>
  )
}

export default Board
