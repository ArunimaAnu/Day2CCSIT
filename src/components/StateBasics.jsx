import { Typography, TextField,Button } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname, setFname] = useState('Arunima A')
    var [value,setValue]= useState()
    const takeInput = (e) => {
        setFname(e.target.value)
    }
    const handleInput = () => {
        setValue(fname)
    }
  return (
      <div>
          <Typography variant='h4' component="div">Welcome&nbsp;{value}</Typography>
          <TextField variant='outlined' label='type your name' onChange={takeInput}></TextField><br/>
          <Button variant="contained" onClick={handleInput}>Confirm</Button>
      </div>
  )
}

export default StateBasics
