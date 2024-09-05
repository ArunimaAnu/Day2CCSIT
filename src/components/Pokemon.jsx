import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios'


const Pokemon = () => {
    var [pokie, setPoke] = useState([])
    axios.get("https://dummyapi.online/api/pokemon")
        .then((response) => {
           console.log(response.data)
            setPoke(response.data)
        })
  return (
      <div>
          <Grid container spacing={2}>
              {pokie.map((val) => {
                  return (
                      <Grid item xs={2}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                  
                  sx={{ height: 140 }}
                  image={val.image_url}
                      />
              
                  <CardContent>
                     
                  <Typography gutterBottom variant="h5" component="div">
                     {val.pokemon}
                          </Typography>
                     
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     {val.type}
                  </Typography>
                          </CardContent>
                </Card>
            </Grid>
                  )
              })}
        </Grid>
         
    </div>
  )
}

export default Pokemon
