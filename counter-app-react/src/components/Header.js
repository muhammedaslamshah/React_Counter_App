import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
const Header = () => {
    const [count, setCount]= useState(0);
    const increment = () =>{
        setCount(count+1)
    }
    
    const decrement = () =>{
        setCount(count-1)
    }
  return (
    <>
    <Container>
    <h1>Counter is : {count}</h1>
    <br/>
    <br/>
    <Container>
    <Button onClick={increment} className='m-2 bg-success'>+</Button>
    <Button onClick={decrement} className='m-2 bg-danger'>-</Button>
    </Container>
    </Container>
    </>
  )
}

export default Header