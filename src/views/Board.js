import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Space from '../components/Space'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Board = () => {
  const [spaces, setSpaces] = useState([])

  useEffect(() => {
    const squares = []
    squares.push(renderSpace('draw-square', '1.5em', '1.5em', '0', '0'))
    squares.push(renderSpace('ace0', '31em', '1.5em', '0', '0'))
    squares.push(renderSpace('ace1', '41em', '1.5em', '0', '0'))
    squares.push(renderSpace('ace2', '51em', '1.5em', '0', '0'))
    squares.push(renderSpace('ace3', '61em', '1.5em', '0', '0'))
    squares.push(renderSpace('space0', '1em', '25em', '0', '0'))
    squares.push(renderSpace('space1', '11em', '25em', '0', '0'))
    squares.push(renderSpace('space2', '21em', '25em', '0', '0'))
    squares.push(renderSpace('space3', '31em', '25em', '0', '0'))
    squares.push(renderSpace('space4', '41em', '25em', '0', '0'))
    squares.push(renderSpace('space5', '51em', '25em', '0', '0'))
    squares.push(renderSpace('space6', '61em', '25em', '0', '0'))
    
    setSpaces(squares)
  }, [])

  const renderSpace = (id, left, top, right, bottom) => {
    console.log(left)
    return (
      <Space
        id={id}
        style={{
          left: left,
          top: top,
          right: right,
          bottom: bottom,
        }}
      >
        {/* <Card className='drag' value='3' suit='spades' /> */}
      </Space>
    )
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='board'>
        {spaces}
      </div>
    </DndProvider>
  )
}

export default Board
