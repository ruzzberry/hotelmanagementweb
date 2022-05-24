import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Aboutaccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{marginTop:"1vh", width:"1250px"}} >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, textAlign:"Left", marginLeft:"30px"}}>
            What is Omega Hotel?
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"Left", marginLeft:"30px"}}>
            Omega Hotel is a new, and fresh hotel. We aim to have 5 stars by offering quality services.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, textAlign:"Left", marginLeft:"30px" }}>Wants to reach us?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"Left", marginLeft:"30px"}}>
            For reservations, inquiries, and other concerns; you may contact our hotline number (+63)926xxxxxxx.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, textAlign:"Left", marginLeft:"30px"}}>
            Services offered
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"Left", marginLeft:"30px"}}>
            You can access our offered services in our services tab.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
