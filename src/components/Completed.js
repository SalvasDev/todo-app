import React, {useReducer} from 'react'
import List from './List';
import styled from '@emotion/styled'

const Btndelall = styled.div`
    margin: 3.6rem auto 0 auto;    

    button {
        display: flex;
        align-items: center;
        border: none;
        background-color: #EB5757;
        color: white;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        font-family: 'Montserrat', sans-serif;
        height: 4rem;
        width: 12.4rem;
        justify-content: center;
        margin-right: 0;
        margin-left: auto;
        cursor: pointer;
    }

    span {
        font-size: 1.5rem;
        margin-right: .5rem;
    }

`;



const Completed = ({name, setName, list, setList, savedData, setSavedData, active, setActive, editItem}) => {


const [any, forceUpdate] = useReducer(num => num + 1, 0);
    
const removeItem =  (id) => {
    setList(list.filter((item) => item.id !== id))
    localStorage.setItem("list", JSON.stringify(list));      

};

const clearList =  () => {
     setList(list.filter((item) => item.completed === false))
    localStorage.setItem("list", JSON.stringify(list));      

  };

  function handleChange(){
    forceUpdate();
}
 

  return (
        <Btndelall>
            <List
                items = {list}
                setList = {setList}
                editItem={editItem}
                active = {active}
                setActive = {setActive}
                removeItem = {removeItem}
                listType = {'completed'}
                handleChange = {handleChange}
            />  
            <button onClick={clearList}>
                <span className="material-symbols-outlined">delete</span>
                <p>delete all</p>
            </button>
      </Btndelall>
  )
}

export default Completed
