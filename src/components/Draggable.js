import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'

const Draggable = (props) => {
  const [isDragging, setIsDragging] = useState(false)
  const [originalX, setOriginalX] = useState(0)
  const [originalY, setOriginalY] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [translateY, setTranslateY] = useState(0)
  const [lastTranslateX, setLastTranslateX] = useState(0)
  const [lastTranslateY, setLastTranslateY] = useState(0)

  const { children } = props

  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  })

  const handleMouseDown = ({ clientX, clientY }) => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    if (props.onDragStart) {
      props.onDragStart()
    }

    setOriginalX(clientX)
    setOriginalY(clientY)
    setIsDragging(true)
  }

  const handleMouseMove = ({ clientX, clientY }) => {
    const { onDrag } = props

    if(!isDragging) {
      return;
    }

    setTranslateX(prevState => clientX - prevState.originalX + prevState.lastTranslateX,
      () => {
        if (onDrag) {
          onDrag(setTranslateX(translateX))
        }
      }
    )

    setTranslateY(prevState => clientY - prevState.originalY + prevState.lastTranslateY,
      () => {
        if (onDrag) {
          onDrag(setTranslateY(translateY))
        }
      }
    )
  }

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)

    setOriginalX(0)
    setOriginalY(0)
    setLastTranslateX(translateX)
    setLastTranslateY(translateY)
    setIsDragging(false, () => {
      if (props.onDragEnd) {
        props.onDragEnd()
      }
    })
  }

  return (  
    <Container
        onMouseDown={handleMouseDown}
        x={translateX}
        y={translateY}
        isDragging={isDragging}
      >
        {children}
      </Container>
  );
}

const Container = styled.div.attrs({
  style: ({ x, y }) => ({
    transform: `translate(${x}px, ${y}px)`
  }),
})`
  cursor: grab;
  
  ${({ isDragging }) =>
  isDragging && css`
    opacity: 0.8;
    cursor: grabbing;
  `};
`;
 
export default Draggable;