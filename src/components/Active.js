import React, {Fragment, useReducer} from 'react'
import List from './List';
import Inputtask from './Inputtask'

const Active = ({name, setName, savedData, setSavedData, list, setList, active, setActive, editItem, handleSubmit}) => {

const [any, forceUpdate] = useReducer(num => num + 1, 0);

function handleChange(){
    forceUpdate();
}
 

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
          typeList = 'active'
          handleChange= {handleChange}
        /> 

    </Fragment>
    )
}

export default Active
