import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../../assets/images/logo.svg'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
        secondary: {
            main: '#ff7e1d',
            contrastText: '#fff',
        },
    },
});

export default function MenuBar() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="" position="static" >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography component="div">
                        <img style={{ width: '100px' }} alt="logo" src={Logo} />
                    </Typography>
                    <Box>
                        <ThemeProvider theme={theme}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Button variant="contained" color="secondary" sx={{ textTransform: 'capitalize', marginRight: '20px', }}>Login</Button>
                            </Link>
                            <Link to="/signup" style={{ textDecoration: 'none' }}>
                                <Button variant="contained" color="secondary" sx={{ textTransform: 'capitalize' }}>Signup</Button>
                            </Link>
                        </ThemeProvider>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}