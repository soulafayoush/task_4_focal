import React from 'react'
import Button from 'react-bootstrap/Button';
const Button = ({name}) => {
  return (
    <Button variant="primary" className='bg-button rounded-2'>{name}</Button>
  )
}

export default Button