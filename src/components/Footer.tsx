import { Box } from '@mui/material';
import { NextPage } from 'next';

const FooterStyle = {
  backgroundColor: '#494949',
  margin: '0 auto',
  paddingTop: '30px',
  paddingBottom: '30px',
  color: '#f2f2f2',
  letterSpacing: '0.08rem',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

const Footer: NextPage = () => {
  return (
    <Box sx={FooterStyle}>
      <center>
        <Box sx={{ fontFamily: 'cursive', fontSize: 16 }}>@waml&apos;s blog</Box>
      </center>
    </Box>
  );
};

export default Footer;
