import React, { Fragment, useState } from 'react'
import Inputtask from './Inputtask'
import List from './List'


const All = ({name, setName, list, setList, active, setActive, editItem}) => {

  const [ savedData,setSavedData ] = useState(false);

  return (
    <Fragment>
      <Inputtask
      name = {name}
      setName = {setName}
      list = {list}
      setList = {setList}
      savedData = {savedData}
      setSavedData = {setSavedData}  
      editItem={editItem}
      active = {active}
      setActive = {setActive}
              
      />      
       <List
          items = {list}
          setList = {setList}
          editItem={editItem}
          active = {active}
          setActive = {setActive}
          listType = {'all'}
            /> 
    </Fragment>
    )
        
}

export default All
