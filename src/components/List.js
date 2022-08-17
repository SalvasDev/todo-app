import React, {Fragment} from 'react'
import Input from './Input';

const List = ( {items, setList, removeItem, editItem, active, setActive, typeList} ) => {


    
   
    return (


        <Fragment>
           
         {items.map((item) => {           
           
            const {id, title, completed} = item;   

                       
                return (    
                    <Input
                    id = {id}
                    title = {title}
                    completed = {completed}
                    items = {items}
                    setList = {setList}
                    removeItem = {removeItem}
                    editItem = {editItem}
                    active = {active}
                    setActive = {setActive}
                    />                             
                )
            })}
            
        </Fragment>
    )
}

export default List

 