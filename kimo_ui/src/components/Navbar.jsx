import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(to right, #8f4bb7, #8b78cb)' }}>

      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <svg width="93" height="24" viewBox="0 0 93 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M68.1543 11.976C68.1543 5.31934 72.7401 0 80.557 0C88.3739 0 92.9998 5.31934 92.9998 11.976C92.9998 18.6326 88.414 23.952 80.557 23.952C72.6999 23.952 68.1543 18.6326 68.1543 11.976ZM88.0528 11.976C88.0528 7.67462 85.4739 4.46106 80.557 4.46106C75.6401 4.46106 73.0913 7.67462 73.0913 11.976C73.0913 16.2774 75.6702 19.4909 80.5469 19.4909C85.4237 19.4909 88.0528 16.2774 88.0528 11.976Z" fill="#FFFFFF"></path><path d="M35.8235 0.489014H43.7407L50.1127 18.6326H50.4438L56.8057 0.489014H64.7631V23.443H59.9064V5.57881H59.5451L53.1431 23.423H47.4435L41.0414 5.57881H40.6802V23.463H35.8235V0.489014Z" fill="#FFFFFF"></path><path d="M26.7224 0.489014H31.6092V23.443H26.7224V0.489014Z" fill="#FFFFFF"></path><path d="M18.2829 23.463L11.5196 15.0897L4.78647 23.463H0V0.489014H4.78647V16.8662L17.6909 0.489014H23.2901L14.3494 11.5868L23.9825 23.463H18.2829Z" fill="#FFFFFF"></path></svg>
        </Typography>
      </Toolbar>
    </AppBar>

  );
};

export default Navbar;
