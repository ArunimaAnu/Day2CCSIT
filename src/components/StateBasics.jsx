import { Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname, setFname] = useState('Arunima A')
  return (
      <div>
          <Typography variant='h4' component="div">Welcome&nbsp;{fname}</Typography>
    </div>
  )
}

export default StateBasics
