import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import { color } from '@/libs/color';

const Header = () => {
  return (
    <AppBar position='static' sx={{ backgroundColor: '#7BA2D4' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters={false}>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/blog/top'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <ImportantDevicesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Box sx={{ fontFamily: 'cursive' }}>waml&apos;s blog</Box>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <IconButton sx={{ p: 0 }} href={'/profile'}>
            <Avatar alt='MyIcon' src={'/images/myIcon.png'} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
