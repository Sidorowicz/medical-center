import PatientTable from './PatientTable';
import PatientMenagement from './PatientMenagement';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import Menu from '../Menu/Menu';
const Patients = () => {
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
          <Grid item xs={4} style={{textAlign:"center"}}>
            <Typography >Patient Overwiev</Typography>
          </Grid>
          <Grid item xs={8}> 
          <Typography>Data in management does not affect database so changes wont be seen here</Typography>
          </Grid>
        </Grid>
       </AccordionSummary>
       <AccordionDetails>
          <PatientTable/>
       </AccordionDetails>
     </Accordion> */}
     {/* <Accordion>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel2a-content"
         id="panel2a-header"
       >
        <Grid container>
          <Grid item xs={6} style={{textAlign:"center"}}><Typography >Patient Management  </Typography></Grid>
          <Grid item xs={6}><Typography>Browse, add, delete and modify patients.</Typography></Grid>
          </Grid>
         
         
       </AccordionSummary>
       <AccordionDetails> */}
                                <PatientMenagement/> 
       {/* </AccordionDetails>
     </Accordion> */}
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

export default Patients
