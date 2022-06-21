import { Button, Grid, List, ListItem } from '@mui/material'
import { Link } from 'react-router-dom';
import { textAlign } from '@mui/system'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import './index.css'
const Introduction = () => {
  return (
    <>
    <Accordion>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1a-content"
         id="panel1a-header"
       >
        <Grid container style={{height:"100%"}}>
         <Grid item xs={4} style={{textAlign:"center"}}><Typography >Project introduction - In progress Notes</Typography></Grid>
         <Grid item xs={8} ><Typography sx={{ color: 'text.secondary' }}>Functionality, Issues, Possible upgrades</Typography></Grid>
         </Grid>
       </AccordionSummary>
       <AccordionDetails>
    
       <Grid container xs={{width:"100%"}}>
        <Grid item xs={3} style={{padding:'50px', fontSize:"20px", fontWeight:"bold"}}> Medical Center Functionality:</Grid>
     
    <Grid item xs={9}>
    <List >
            <ListItem>
            1.Overview providing number of patients, projects, test, and other data as well as tables of corresponding content
            </ListItem>
            <ListItem>
            2.Patients tab containing grid with all patients data that allows to add, delete and modify patients. 
            </ListItem>
            <ListItem>
            3.Projects tab containing grid with all projects data that allows to add, delete and modify Projects. It also contains grid containing patient to project link data, as well as forms allowing to add patient to project and order a test.
            </ListItem>
            <ListItem>
            4.Displaying patients of selected projects with information whether they agrees to test or not
            </ListItem>
        </List>
    </Grid>
    </Grid>

    <Grid container xs={{width:"100%"}}>
        <Grid item xs={3} style={{padding:'50px', fontSize:"20px", fontWeight:"bold"}}> Possible upgrades:</Grid>
     
    <Grid item xs={9}>
    <List >
            <ListItem>
            1.Change JSON-server for real backend that would allow to get real test,patients and other names instead od id's. (inner joins etc)
            </ListItem>
            <ListItem>
            2.Redo DB, add more possible results to test than true and false
            </ListItem>
            <ListItem>
            3.Change x-Grid for mui Grid, it works just fine but it is just not needed to import two Grids when mui already comes with one
            </ListItem>
            <ListItem>
            4.Add login/registration with possible view for patient //test results etc
            </ListItem>
        </List>
    </Grid>
    </Grid>

    <Grid container xs={{width:"100%"}}>
        <Grid item xs={3} style={{padding:'50px', fontSize:"20px", fontWeight:"bold"}}>Issues:</Grid>
     
    <Grid item xs={9}>
    <List >
            <ListItem>
            <s>1.Only patient form actually modify database records.</s>
            </ListItem>
            <ListItem>
            <s>2.Multiple fetchings, change to passing down array and function instead of components GETing them themselves, maybe use redux/context</s>
            </ListItem>
            <ListItem>
            3.Cannot display data from multiple tables in JSON-server joined together (as single table i could join two states but that would be pointless when i could just form a query)
            </ListItem>
        </List>
    </Grid>
    </Grid>
      
        
       </AccordionDetails>
    </Accordion>

     <Grid container spacing={2} >
        <Grid item xs={12}>
          <div className='Intro'>
            <h1>Medical Center</h1>
            <h2>Online tests and medical projects management system.</h2>
            <div className='IntroContainer' style={{    height:"300px"}}>
            <div className='IntroItem'> <div><ContentPasteSearchIcon sx={{ fontSize: 140 }}/></div>Browse medical data</div>
            <div className='IntroItem'> <div><AssignmentIcon sx={{ fontSize: 140 }}/></div>Order and manage tests</div>
            <div className='IntroItem'> <div><PersonAddAlt1Icon sx={{ fontSize: 140 }}/></div>Manage patients and projects</div>
            {/* <div className='IntroItemBottom'>Data</div> */}
            </div>
            <div className='IntroContainer'><Link to="/Overwiev"><Button size="large" variant="outlined" >Enter</Button></Link></div>
            
          </div>
        </Grid>
      </Grid>

  
    </>
  )
}

export default Introduction
