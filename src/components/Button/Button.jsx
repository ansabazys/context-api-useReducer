import React from 'react'
import './Button.css'

export const Button = ({value, handleClick}) => {
  return (
    <button className='button' onClick={handleClick}>
        {value} 
    </button>
  )
}


