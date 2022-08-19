import React, { Fragment } from 'react'
import Inputtask from './Inputtask'
import List from './List'


const All = ({name, setName, list, setList, active, setActive, editItem, savedData, setSavedData, handleSubmit}) => {


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
      handleSubmit = {handleSubmit}
              
      /> 

        <List
          items = {list}
          setList = {setList}
          editItem={editItem}
          active = {active}
          setActive = {setActive}
          typeList = 'All'
        /> 
    </Fragment>
    )
        
}

export default All
