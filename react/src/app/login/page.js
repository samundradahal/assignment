import React from 'react'
import {Button,Input} from "@nextui-org/react";
import NavBar from '../components/navbar/page';

const register = () => {
  return (
    <div className ="items-center">
      <NavBar/>
      <Input type="email" label="Email" placeholder="Enter your email" className='w-80 m-3' />
        <Input type="password" label="Password" placeholder="Enter your password" className='w-80'/><br/>
        <Button color="primary">
            Login
        </Button>
    </div>
  )
}

export default register