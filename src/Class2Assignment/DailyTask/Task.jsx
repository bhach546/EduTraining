import React from 'react'
import CheckBox from '../../NeedCompo/CheckBox';

const DailyTask = () => {
    const bha =['Bharat','Konda','A','Bindu']
    return(
        <>
        <div>
          <CheckBox 
          label={bha}/>  {bha}This is sample Message
        </div>
        </>
    )
}
export default DailyTask;