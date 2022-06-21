import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { useState } from 'react';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
const Footer = () => {
  const [value, setValue] = useState(0);
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation>
    <Link to="/"><BottomNavigationAction label="Recents" icon={<>Medical Center<BloodtypeIcon/></>} /></Link>
      </BottomNavigation>
      </Paper>
  )
}

export default Footer
