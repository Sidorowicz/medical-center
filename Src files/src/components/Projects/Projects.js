import ProjectMenagement from './ProjectMenagement';
import ProjectTable from './ProjectTable';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PatientToProject from '../Patients/PatientToProject';
import { Grid } from '@mui/material';
import PatientsInProjects from '../Patients/PatientsInProjects';
import TestOrder from '../Tests/TestOrder';
import TestsTable from '../Tests/TestsTable';
import TestMenagement from '../Tests/TestMenagement';
import ProjectDetails from './ProjectDetails';
import Menu from '../Menu/Menu';
const Projects = () => {
  return (
     <div>
      <Menu/>
     {/* <Accordion>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1a-content"
         id="panel1a-header"
       >
        <Grid container>
         <Grid item xs={4} style={{textAlign:"center"}}><Typography >Project Overwiev</Typography></Grid>
         <Grid item xs={8} ><Typography sx={{ color: 'text.secondary' }}>Data in management does not affect database so changes wont bee seen here</Typography></Grid>
         </Grid>
       </AccordionSummary>
       <AccordionDetails>
    
                                  <ProjectTable/> 
        
       </AccordionDetails>
     </Accordion> */}
     <Accordion>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel2a-content"
         id="panel2a-header"
       >
        <Grid container>
         <Grid item xs={4} style={{textAlign:"center"}}><Typography >Project Management  </Typography></Grid>
         <Grid item xs={8} ><Typography sx={{ color: 'text.secondary' }}>Browse, add, delete and modify projects.</Typography></Grid>
         </Grid>
       </AccordionSummary>
       <AccordionDetails>
      
                                <ProjectMenagement/> 
        
       </AccordionDetails>
     </Accordion>
     <Accordion>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel2a-content"
         id="panel2a-header"
       >
        <Grid container>
         <Grid item xs={4} style={{textAlign:"center"}}> <Typography>Add patient to a project  </Typography></Grid>
         <Grid item xs={8} > <Typography sx={{ color: 'text.secondary' }}>Add patient to project</Typography>
       </Grid>
         </Grid>
        
        </AccordionSummary>
       <AccordionDetails>
         
                          <PatientToProject/>
     
       </AccordionDetails>
     </Accordion>
     <Accordion>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel2a-content"
         id="panel2a-header"
       >
        <Grid container>
         <Grid item xs={4} style={{textAlign:"center"}}> <Typography>Patients in projects </Typography></Grid>
         <Grid item xs={8} > <Typography sx={{ color: 'text.secondary' }}>Browse, edit, delete and add test orders and projects  </Typography>
       </Grid>
         </Grid>
        
        </AccordionSummary>
       <AccordionDetails>
         
                          <PatientsInProjects/>
     
       </AccordionDetails>
     </Accordion>
     <Accordion>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel2a-content"
         id="panel2a-header"
       >
        <Grid container>
         <Grid item xs={4} style={{textAlign:"center"}}> <Typography>Order test </Typography></Grid>
         <Grid item xs={8} > <Typography sx={{ color: 'text.secondary' }}>Add test order</Typography>
       </Grid>
         </Grid>
        
        </AccordionSummary>
       <AccordionDetails>
         
                          <TestOrder/>
     
       </AccordionDetails>
     </Accordion>

     <Accordion><AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel2a-content"
         id="panel2a-header"
       >
        <Grid container>
         <Grid item xs={4} style={{textAlign:"center"}}> <Typography>Test Orders Management</Typography></Grid>
         <Grid item xs={8} > <Typography sx={{ color: 'text.secondary' }}>Browse, edit and delete a test orders  </Typography>
       </Grid>
         </Grid>
</AccordionSummary><AccordionDetails><TestMenagement/></AccordionDetails>
     </Accordion>

     <Accordion><AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel2a-content"
         id="panel2a-header"
       >
     <Grid container>
         <Grid item xs={4} style={{textAlign:"center"}}> <Typography>Project Details</Typography></Grid>
         <Grid item xs={8} > <Typography sx={{ color: 'text.secondary' }}>Find specific project details like connected patient_id's and they agreement status</Typography>
       </Grid>
         </Grid>
</AccordionSummary><AccordionDetails><ProjectDetails/></AccordionDetails>
     </Accordion>




     
     {/* <Accordion disabled>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel3a-content"
         id="panel3a-header"
       >
         <Typography>Disabled Accordion</Typography>
       </AccordionSummary>
     </Accordion> */}
   </div>
  )
}

export default Projects
