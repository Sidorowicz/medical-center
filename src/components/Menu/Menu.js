import React from 'react'
import { Link } from 'react-router-dom';
import { Dialog, Grid } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import "./Menu.css"
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { fontSize } from '@mui/system';

const Menu = () => {
    const [open, setOpen] = React.useState(false);
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        '&:hover': {
          backgroundColor: red[700],
        },
      }));

    const NavButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#3c3c44'),
        backgroundColor: "#3c3c44",
        '&:hover': {
          backgroundColor: "rgb(172, 172, 172)",
        },
      }));

      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (value) => {
        setOpen(false);
      };

      

  return (
    <div className='menu'>
        <Dialog onClose={handleClose} open={open} fullWidth>
            <p >
            <p style={{display:'flex',justifyContent:"center"}}>Thanks for clicking, no idea what to put here.</p>
            <p style={{display:'flex',justifyContent:"center"}}>Maybe contact instead of about...</p>
            <p style={{display:'flex',justifyContent:"center"}}>Oh, help would be nice. Just like i need a help with finding  </p>
            <p style={{display:'flex',justifyContent:"center"}}>a missing css file so i can stop using nested styles</p>
            <p style={{display:'flex',justifyContent:"center"}}>Well... thats it...</p>
            </p>
            
       </Dialog>

            <Link to="/"><Button size="large"><div className="MainNavItem">Medical Center</div></Button></Link>

            <Link to="/Overwiev"><NavButton size="large" >Overview</NavButton></Link>

            <Link to="/Patients"><NavButton size="large">Patients</NavButton></Link>

            <Link to="/Projects"><NavButton size="large">Projects</NavButton></Link>

            <Link to="/Tests"><NavButton size="large">Tests</NavButton></Link>

            <ColorButton variant="contained" onClick={handleClickOpen} >About</ColorButton>

    {/* <Grid container spacing={2} >
        <Grid item xs={2} className="grid">
            <Link to="/">
                <Button size="large"><div className="MainNavItem">Medical Center</div></Button>
            </Link>
         </Grid>
        <Grid item xs={2}>
            <Link to="/Overwiev">
                <Button 
                size="large" >
                Overview
                </Button>
            </Link>
         </Grid>
        <Grid item xs={2}>
            <Link to="/Patients">
                <Button size="large">Patients</Button>
            </Link>
         </Grid>
         <Grid item xs={2}>
            <Link to="/Projects">
                <Button size="large">Projects</Button>
            </Link>
         </Grid>
         <Grid item xs={2}>
            <Link to="/Tests">
                <Button size="large">Tests</Button>
            </Link>
         </Grid>
    </Grid> */}
    </div>
  )
}

export default Menu
