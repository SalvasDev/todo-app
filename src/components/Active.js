import React, {Fragment} from 'react'
import List from './List';
import Inputtask from './Inputtask'

const Active = ({name, savedData, setSavedData, setName, list, setList, active, setActive, editItem}) => {



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
          listType = {'active'}
        /> 
    </Fragment>
    )
}

export default Active
