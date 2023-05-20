import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function Navbar() {
  return (
   
      <AppBar position="static">
        <Container maxWidth="sm">
        <Toolbar>
          <Typography variant="h5" component="p">
            Bank Of React
          </Typography>
        </Toolbar>
        </Container>
      </AppBar>
    
  );
}