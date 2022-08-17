import React, { useState } from 'react'
import Subbutton1 from './components/Subbutton1';
import Subbutton2 from './components/Subbutton2';
import Subbutton3 from './components/Subbutton3';
import All from './components/All';
import Active from './components/Active';
import Completed from './components/Completed';
import styled from '@emotion/styled';


const Container = styled.div`
  width: min(95%, 630px);
  margin: 3rem auto 5.8rem auto;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 700;

  .menu {
    margin: 0 auto;
    display: grid;
    column-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    
  }

  .nav__btn {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  .nav__btn  button {
    align-items: center;
    border: none;
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 1.5rem;
    cursor: pointer;
    color: #333333;
  }


 .horiz__line {
    width: 100%;
    height: 1px;
    background-color: #BDBDBD;;
  }

`;



function App () {


  const [ name, setName ] = useState('');
  const [ list, setList] = useState([]);
  const [ active, setActive ] = useState(false);

  const [ showaall, setShowall ] = useState(true);
  const [ showactive, setShowactive ] = useState(false);
  const [ showcompleted, setShowcompleted ] = useState(false);

  
  const showaAllOn = (e, show) => {
    e.preventDefault()
    if (show) {
      setShowall(true);
      setShowactive(false);
      setShowcompleted(false);     
    } 
    return;
  } 

    const showaActiveOn = (e, show) => {
    e.preventDefault()

    if (show) {
      setShowactive(true);
      setShowall(false);
      setShowcompleted(false);     
    } 
    return;
  } 

    const showaCompletedOn = (e, show) => {
        e.preventDefault()

        if (show) {
        setShowcompleted(true);
        setShowactive(false);
        setShowall(false);     
        } 
    return;
  } 

  



  const editItem =  (id, checked, active, setActive ) => {

    const editItem = list.find((item) => item.id === id);
      
    editItem.completed = checked;
  
    setActive(checked)

  };

  return (
    <Container>
        <h1>#todo</h1>
        <div className="menu">
          
          <div className="nav__btn">
            <button 
            className="all"
            onClick= { (e) => {showaAllOn(e, true)} }
            >
              All
            </button>
            {showaall ?
            <Subbutton1/>
            : null
             }


          </div>

          <div className="nav__btn">
            <button
            onClick= { (e) => {showaActiveOn(e, true)} }
            className="active">
              Active
            </button>
            {showactive ?
            <Subbutton2/>
            : null
             }
          </div>

          <div className="nav__btn">
            <button
            onClick= { (e) => {showaCompletedOn(e, true)} }
            className="completed">
              Completed
            </button>
            {showcompleted ?
            <Subbutton3/>
            : null
             }             
          </div>
      </div>
    <div className="horiz__line"></div>

    <div className="Sec__container">
        { showaall ? 
         <All 
            name = {name}
            setName = {setName}
            list = {list}
            setList = {setList}
            active = {active}
            setActive = {setActive}
            editItem={editItem}
          
         />
         : null
        }
         { showactive ? 
         <Active
          name = {name}
          setName = {setName}
          list = {list}
          setList = {setList}
          editItem={editItem}
          active = {active}
          setActive = {setActive}
           />
         : null
        }

        { showcompleted ? 
         <Completed
          editItem={editItem}
         />
         : null
        }
       
      </div>

    </Container>
  );
}

export default App;
