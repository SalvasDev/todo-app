import React, { Fragment } from 'react'
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



const Completed = (list, setList, editItem) => {


const removeItem =  (id) => {
   setList(list.filter((item) => item.id !== id))
};


const clearList =  () => {
    setList([]);
  };


  return (
    <Fragment>
        <Btndelall>
            {/* <List />  */}
            <button>
                <span className="material-symbols-outlined">delete</span>
                <p>delete all</p>
            </button>
      </Btndelall>
      </Fragment>
  )
}

export default Completed
