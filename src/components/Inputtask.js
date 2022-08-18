import React, { Fragment } from 'react'
// import Error from './Error';
import styled from '@emotion/styled'

const Row = styled.div`
  margin: 1.8rem auto 3.2rem auto;
  display: grid;
  grid-template-columns: 80% 1fr;
  column-gap: 2.5rem;
  height: 56px;
  

  .inp input {
   width: 100%;
   height: 100%;
   background-color: transparent;
   border: 1px solid #BDBDBD;
   border-radius: 12px;
   padding-left: 1.2rem;
   font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  }

  .inp input::placeholder {
    color: #828282;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
  }
  


  .btn button {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
    background-color: #2F80ED;
    color: white;
    box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
    font-weight: 600;
    font-size: 1.4rem;
    cursor: pointer;
  }

  @media (max-width: 529px) {
    column-gap: 1rem;
    height: 45px;
  }

`;



const Inputtask = ({name, setName, list, setList, active, setActive, editItem, handleSubmit, error, savedData, setSavedData}) => {

  return (
    <Fragment>
      <form onSubmit= {handleSubmit}>
        {/* {error ? <Error msg ='Please enter a value'/> : null } */}
        <Row>         
            <div className="inp">
              <input 
                placeholder='add details'
                onChange = { (e) => setName(e.target.value)}
                value={name}
                 />
            </div>

            <div className="btn">
                <button
                type='submit'
                >
                Add
              </button>
          </div>          
        </Row>
      </form> 
    </Fragment>
    )
}

export default Inputtask
