import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const AccrdElement = ({text, title, comp}) => {
  return (
         <Accordion>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel2a-content"
         id="panel2a-header"
       >
        <Grid container>
         <Grid item xs={4} style={{textAlign:"center"}}> <Typography>{title} </Typography></Grid>
         <Grid item xs={8} > <Typography sx={{ color: 'text.secondary' }}>{text}  </Typography></Grid>
        </Grid>
        </AccordionSummary>
       <AccordionDetails>
        {comp}
       </AccordionDetails>
     </Accordion>

  )
}

export default AccrdElement
