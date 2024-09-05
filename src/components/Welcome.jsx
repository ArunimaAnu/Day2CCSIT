import { Typography, Button } from '@mui/material'
import React, {useEffect, useState} from 'react'

const Welcome = () => {
    var [names, setNames] = useState()
    const takeInput1 = () => {
        setNames('Angular')
    }
    const takeInput2 = () => {
        setNames('React')
    }
    const takeInput3 = () => {
        setNames('Javascript')
    }
    useEffect(() => { takeInput1() },[])
    return (
        <div>
            <Typography variant='h4' component="div">Welcome:&nbsp;{names}</Typography><br />
            <Button variant="contained" onClick={takeInput1}>Angular</Button>&nbsp;&nbsp;
            <Button variant="contained" onClick={takeInput2}>React</Button>&nbsp;&nbsp;
            <Button variant="contained" onClick={takeInput3}>Javascript</Button>
        </div>
    )
}

export default Welcome
