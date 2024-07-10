import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../Assets/logo.svg'
// Importez votre image de logo

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'revert-layer' }}>
            <Toolbar>
                <img src={Logo} style={{ height: '90px', marginRight: '30px' }} alt="Logo" /> {/* Utilisez votre logo ici */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                    ML-Factory
                </Typography>
                <Button style={{ color: 'white' }}>Home</Button>
                <Button style={{ color: 'white' }}>About</Button>
                <Button style={{ color: 'white' }}>Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;





