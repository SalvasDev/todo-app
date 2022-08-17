import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'

const Taskinput = styled.div`

    label {
        font-size: 1.8rem;
        font-weight: 500;
        vertical-align: middle;
        display: flex;
        align-items: center;
        width: 80%;
        margin-left: 0;

    }

    .list__items {
        list-style-type: none;
        margin: 0;
        padding: 0;
        margin-bottom: 2rem;

    }


   

    input {        
        width: 24px;
        height: 24px;
        margin-right: 1rem;
    }  
`;

const Listactive = ( {items, setList, removeItem, editItem, active, setActive} ) => {

   
    const handleCheckbox = (id, e ) => {
        let newState = e.target.checked;
        active = newState;

        //Avisar al componente padre puedes ejecutar una función pasada por los props
        editItem(id, newState, active, setActive);    
    }



   
    return (
        <Taskinput>
 
         {items.map((item) => {           
           
            const {id, title, completed} = item;  
            
                          
                return (                   

                    <ul className="list__items" key={id}>
                        <li key={id} style={ completed  ? {textDecorationLine:"line-through"} : null}>
                            <label
                            htmlFor = {id}
                            >
                                <input
                                    checked={id.active}
                                    id = {id} 
                                    name = {title}
                                    type="checkbox"  
                                    onChange = {e => {handleCheckbox(id, e)} }
                                    />
                                    {title}
                            </label>                    
                        </li>
                    </ul>
                )
            })}
            
        </Taskinput>
    )
}

export default Listactive







