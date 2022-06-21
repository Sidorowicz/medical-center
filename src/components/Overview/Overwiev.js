import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PatientTable from '../Patients/PatientTable';
import ProjectTable from '../Projects/ProjectTable';
import { groupBy} from 'lodash';
import { Box, Divider, Grid } from '@mui/material';
import TestsTable from '../Tests/TestsTable';
import Menu from '../Menu/Menu';

const style={display:'flex',justifyContent:'space-between',width:'40%',padding:"20px"}

const Overwiev = () => {

  const [patients,setPatients]=useState([])
  const [projects,setProjects]=useState([])
  const [tests,setTests]=useState([])
  const [ptests,setPTest]=useState([])
  const [patientscounter,setPatientCounter]=useState(0)
  const [projectscounter,setProjectsCounter]=useState(0)
  const [testscounter,setTestsCounter]=useState(0)
const [isLoading,setLoading]=useState(true)
useEffect(()=>{ 
  axios.get(`http://localhost:403/patients`)
  .then(res => {
    setPatients( res.data);
  }) 
  .catch(error => {
  console.log(error); 
  });
  
  axios.get(`http://localhost:403/projects`)
  .then(res => {
    setProjects( res.data);
  })
  .catch(error => {
  console.log(error);
  });

  axios.get(`http://localhost:403/tests`)
  .then(res => {
    setTests( res.data);
    setLoading(false)
  })
  .catch(error => {
  console.log(error);
  });
  axios.get(`http://localhost:403/patienttest`)
  .then(res => {
    setPTest( res.data);
    setLoading(false)
  })
  .catch(error => {
  console.log(error);
  });
},[])
 
console.log(Object.entries(groupBy(tests,"test_name")))
  return (
    <div>
             <Menu/>
    <Accordion>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1a-content"
         id="panel1a-header"
       >
        <Grid container>
        <Grid item xs={4} style={{textAlign:"center"}}><Typography >Number of patients:</Typography></Grid>
         <Typography sx={{ color: 'text.secondary' }}>{patients.length }</Typography>
         </Grid>
       </AccordionSummary>
       <AccordionDetails>
        <PatientTable/>
       </AccordionDetails>
     </Accordion>
     <Accordion>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel2a-content"
         id="panel2a-header"
       >
         <Grid container>
         <Grid item xs={4} style={{textAlign:"center"}}><Typography >Number of projects:  </Typography></Grid>
         <Typography sx={{ color: 'text.secondary' }}>{projects.length}</Typography>
         </Grid>
       </AccordionSummary>
       <AccordionDetails>
        <ProjectTable/>
       </AccordionDetails>
     </Accordion>
     <Accordion>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel2a-content"
         id="panel2a-header"
       >
         <Grid container>
         <Grid item xs={4} style={{textAlign:"center"}}><Typography  >Number of tests made : </Typography></Grid>
         <Typography sx={{ color: 'text.secondary' }}>{ptests.length}</Typography>
         </Grid>
       </AccordionSummary>
       <AccordionDetails>
        <TestsTable/>
       </AccordionDetails>
     </Accordion>
     {/* <Accordion>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel2a-content"
         id="panel2a-header"
       >
         <Typography sx={{ width: '33%', flexShrink: 0 }}>Statistic data </Typography>
         <Typography sx={{ color: 'text.secondary' }}>Some charts, based on static values</Typography>
       </AccordionSummary>
       <AccordionDetails>
      <CircleChart/>
       </AccordionDetails>
     </Accordion> */}
     <Accordion>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel2a-content"
         id="panel2a-header"
       >
         <Grid container>
         <Grid item xs={4} style={{textAlign:"center"}}><Typography >Test ID </Typography></Grid>
         <Typography sx={{ color: 'text.secondary' }}>Number of tests completed</Typography>
         </Grid>
       </AccordionSummary>
       <AccordionDetails>
        {Object.entries(groupBy(ptests,"test_id")).map((test,index)=>
                  <Box key={index} sx={style}>
                  <Typography>
                  {test[0]}
                  </Typography>
                  <Divider light />
                  <Typography>
                  {test[1].length}
                  </Typography>
                  </Box>
              )}
              
       </AccordionDetails>
     </Accordion>

    </div>
  )
}

export default Overwiev
