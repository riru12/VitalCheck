import React from 'react';
import '../App.css';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
  Box
} from "@mui/material";

const NavbarDefault = (props) => {
  return (
    <AppBar position='static' style={{ background: '#F8F9FA', backgroundColor: "#223730"}}>
      <Container sx={{ p:2 }} maxWidth="xl" className="font-link">
        <Toolbar>
            
            <Typography 
              variant='h4'
              component='div'
              fontWeight={700}
              fontSize="2.25rem"
              padding={2}
              style={{ color: "white"}} sx={{flexGrow:1}}
            >
              <Box component="div" sx={{ display: { xs: 'none', sm: 'block' }, textAlign: "center" }}>
                <a href="/" style={{color: "white", textDecoration: "none"}}>VitalCheck</a>
              </Box>
            </Typography>
            
          <CssBaseline />
        </Toolbar>
      </Container>
    </AppBar>
    )
}

export default NavbarDefault;