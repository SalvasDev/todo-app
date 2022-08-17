import React, {useState} from 'react'
import styled from '@emotion/styled';

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

    .disabled {
        text-decoration-line: line-through;
    }

   

    input {        
        width: 24px;
        height: 24px;
        margin-right: 1rem;
    }  
`;


const Input = ({item, items, setList, removeItem, editItem, active, setActive, id, title, completed}) => {

    

    const [ enabled, setEnabled ] = useState(true);

    const handleCheckbox = (id, e ) => {
        
        setEnabled(!enabled)

        let newState = e.target.checked
        active = newState;


        //Avisar al componente padre 
        editItem(id, newState, active, setActive);    
    }


    const classEnabled = enabled ? '' : 'disabled';

    return (
        <Taskinput>
            <ul className="list__items" key={id}>
                {/* <li style={ item.completed ? {textDecorationLine:"line-through"} : null}> */}
                <li  >
                    <label
                    htmlFor = {id}
                    className={classEnabled}
                    >
                        <input
                            checked={id.active}
                            id = {id} 
                            name = {title}
                            type= "checkbox"  
                            onChange = { e => {handleCheckbox(id, e)} }
                            />
                            {title}
                    </label>                    
                </li>
            </ul> 
        </Taskinput>   

      );
}
 
export default Input;