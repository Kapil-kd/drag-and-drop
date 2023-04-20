import { Grid, Typography } from '@mui/material'
import React from 'react'

export const Homepage = () => {
    

  return (
    <Grid container sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <Typography sx={{p:"100px",color:"grey",border:"3px dashed black",backgroundColor:"white"}} variant='h5' ><p style={{fontSize:"15px"}}>👈👈 Click <i>name or title</i> to know the</p><p style={{textAlign:"center",marginTop:"10px"}}>Team  Details</p></Typography>
    </Grid>
  )
}
