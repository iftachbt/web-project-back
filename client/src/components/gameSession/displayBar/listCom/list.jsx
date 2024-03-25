import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SpellInfo from '../../spells/spellReader';
import { CircularProgress } from '@mui/material';

function ListOfData(props) {
  let {dataList,pressOnce,setPressOnce,setDataList} = props
  
  // React.useEffect(() =>{
  //   if(pressOnce){
  //     console.log("1");
  //     // fetchMoreDetails()
  //     console.log("2",dataList);
  //     setPressOnce(false)
  //   }
  // },[dataList])
  // async function fetchMoreDetails(){
  //   let newDataList = []
  //   dataList.map(async (info,index) => {
  //     let dataInfo = await getFromDndApi(info.url)
  //     const newData = {...info,...dataInfo}
  //     newDataList = [dataList[index] = newData,...newDataList]
  //   })
  //   if (!newDataList.length) setDataList(newDataList)
  // }
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