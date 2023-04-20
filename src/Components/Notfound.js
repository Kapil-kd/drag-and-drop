import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

export const Notfound = () => {
    const navigate =useNavigate()
  return (
    <div>
        <p>Page not found....</p><br/>
        <Button  disableRipple onClick={()=>navigate("/")}>Back to Home</Button>
    </div>
  )
}
