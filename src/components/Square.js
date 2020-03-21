import React from 'react';

const Square = ({ value, onClick }) => {
  let color = 'red';
  if (value === 'X') {
    color = 'blue';
  }
  return (
    <button className='square' style={{ color: color }} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
