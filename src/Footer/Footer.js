import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <AppBar position="static" sx={{marginTop:'250px',backgroundColor: 'black', boxShadow: 'none' }}>
            <Toolbar>
                <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: 'center', color: 'white' }}>
                    &copy; {new Date().getFullYear()} ML-Factory. All rights reserved.
                </Typography>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="github"
                    href="https://github.com/votre-profil"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'white' }} // Couleur noire pour l'icône GitHub
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="linkedin"
                    href="https://www.linkedin.com/in/votre-profil"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'white' }} // Couleur noire pour l'icône LinkedIn
                >
                    <LinkedInIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;

