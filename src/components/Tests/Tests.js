
import TestsMenagement from './TestsMenagement';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import Menu from '../Menu/Menu';
const Tests = () => {
  return (
     <div>
<Menu/>
                                <TestsMenagement/> 

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

export default Tests
