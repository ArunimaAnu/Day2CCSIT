import { AppBar,Toolbar,Typography,Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h6' component="div" color="black">My App</Typography>&nbsp;&nbsp;&nbsp;
                  <Typography variant='h6' component="div">
                      <Link to='/login'>
                          <Button variant="contained">LOGIN</Button></Link>&nbsp;&nbsp;&nbsp;
                      <Link to='/'>
                      <Button variant="contained">SIGN UP</Button></Link>
                  </Typography>
              </Toolbar>
          </AppBar>
          <br /><br /><br />
    </div>
  )
}

export default Navbar
