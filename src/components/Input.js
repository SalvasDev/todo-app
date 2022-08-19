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

    li {
        display: flex;
        align-items: center;
    }

    .disabled {
        text-decoration-line: line-through;
    }

   

    input {        
        width: 24px;
        height: 24px;
        margin-right: 1rem;
    } 
    
   .btn__del {
        background-color: transparent;
        color: #BDBDBD;
        margin-right: 2rem;
        padding: 0;
        width: 14px;
        height: 18px;
    }

    .btn__small {
        font-size: 18px;
    }
`;


const Input = ({item, items, list, setList,  removeItem, editItem, active, setActive, id, title, completed, typeList}) => {

    
    const [ enabled, setEnabled ] = useState(!completed);

    
    const handleCheckbox = (id, e ) => {
        

        setEnabled(!enabled)
        let newState = e.target.checked
        active = newState;

        //Notify to parent component 
        editItem(id, newState, active, setActive);
        
    }


    let classEnabled = enabled ? '' : 'disabled';   
    let defCheck = completed ? true : false;

 
    return (
        <Taskinput>
            <ul className="list__items" >
                <li>
                    <label
                    htmlFor = {id}
                    className={classEnabled}
                    >
                        <input
                            checked={id.active}
                            defaultChecked={ defCheck}
                            id = {id} 
                            name = {title}
                            type= "checkbox"  
                            onChange = { e => {handleCheckbox(id, e)} }
                            />
                            {title}
                    </label>   
                    {typeList === 'completed' && 
                         <button className="btn__del" onClick={() => removeItem(id)}>
                           <span className="material-symbols-outlined btn__small">delete</span>
                        </button>}                 
                </li>
            </ul> 
        </Taskinput>   

      )
}
 
export default Input;



