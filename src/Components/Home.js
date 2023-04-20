import { Box, Button, Grid, IconButton, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { Link,Outlet } from 'react-router-dom';

export const Home = () => {
   
   const [datas,setDatas] = useState([])
   const [value,setValue] = useState('')

   const getdata = async ()=>{
    try{
      const res = await axios.get("http://localhost:8000/company")
      setDatas(res.data)
    }catch(err){
      return console.log(err)
    }
   }
   useEffect(()=>{
      getdata()
   },[])
  return (
<Grid container  spacing={1}>
   <Grid item sx={{borderRight:"1px solid #e6e6e6"}} md={3}>
    <Paper md={3} sx={{margin:"40px auto",maxWidth:"300px" }} elevation={1}>
    <IconButton sx={{ p: '10px',cursor:"default" }}>
        <SearchIcon/>
    </IconButton>
    <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by id or title"
        inputProps={{ 'aria-label': 'search' }}
        value={value}
        onChange = {(e)=>setValue(e.target.value)}
      />
    </Paper>
    <TableContainer>     
          <Table >
            <TableHead >
              <TableRow >
                <TableCell>#</TableCell>
                <TableCell>Project Id</TableCell>
                <TableCell>Project Title</TableCell>
              </TableRow>
            </TableHead>
            
           <TableBody>
                {datas.filter(val=> {
                  if(value === ""){
                     return val;
                  }else if(
                   val.prname.toLowerCase().includes(value.toLowerCase()) || val.pid.toString().includes(value.toString())
                  ){
                    return val;
                  }
                  }).map((item,index)=>(
             
                    
                <TableRow className='tablebody'  key={index}> 
                  <TableCell>{index + 1}</TableCell>
                  <TableCell><Link to={item.id.toString()}>{item.pid}</Link></TableCell>
                  <TableCell><Link to={item.id.toString()}>{item.prname}</Link></TableCell>
                </TableRow>
              ))}
            </TableBody>
            
          </Table>
         {datas.length == 0 ? <p style={{padding:"15px"}}>No datas to show...</p> : null} 
         </TableContainer>
   </Grid>

   <Grid item md={9}>
    <Outlet/>
    </Grid>
    
</Grid>
  )
}

