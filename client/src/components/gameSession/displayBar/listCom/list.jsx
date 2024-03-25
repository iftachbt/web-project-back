import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SpellInfo from '../../spells/spellReader';
import { CircularProgress } from '@mui/material';

function ListOfData(props) {
  let {dataList,setDataList} = props
  
  
  return (
    <div >
      {dataList.map((text, index) => (
         <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>{text.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{
              Object.keys(text).length > 3
              ?<SpellInfo
              spell = {text}
              />
              :  <CircularProgress /> 
            }
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
export default ListOfData