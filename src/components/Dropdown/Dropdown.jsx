import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./styles.scss"
const UserDropdown = ({interest}) => {

return ( 
    <div className="userDropdown">
    <Accordion>
        <AccordionSummary 
        expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Interests</Typography>
        </AccordionSummary>
        <AccordionDetails>
             <Typography>{interest.name}</Typography>
        </AccordionDetails>
      </Accordion> 
      </div>
    
)
} 

export default UserDropdown;