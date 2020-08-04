import React from 'react';

const Space = ({ children, style }) => {
  return (
    <div className="space" style={style} >
      {children}
    </div>
  );
}
 
export default Space;