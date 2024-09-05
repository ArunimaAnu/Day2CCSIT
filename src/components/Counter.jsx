import { Typography, Button } from '@mui/material'
import React ,{ useState } from 'react'

const Counter = () => {
    var [counts, setCounts] = useState(0)
    const increaseCount = () => {
        setCounts(++counts)
    }
    const decreaseCount = () => {
        setCounts(--counts)
    }
  return (
    <div>
          <Typography variant='h4' component="div">Count:&nbsp;{counts}</Typography><br/>
          <Button variant="contained" onClick={increaseCount}>Add</Button>&nbsp;&nbsp;
          <Button variant="contained" onClick={decreaseCount}>Subtract</Button>
          
    </div>
  )
}

export default Counter
