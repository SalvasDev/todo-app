import React, {Fragment} from 'react'
import Input from './Input';



const List = ( {items, list, setList, removeItem, editItem, active, setActive, typeList, handleChange } ) => {
    

    
    return (


        <Fragment>
                         


         { typeList === 'All' ?
         
         
           items.map((item) => {           
           
            const {id, title, completed} = item;   

                       
                return (   
                    
                    <Input
                    key={id.toString()} value={id}
                    id = {id}
                    title = {title}
                    completed = {completed}
                    list = {items}
                    setList = {setList}
                    editItem = {editItem}
                    active = {active}
                    setActive = {setActive}
                    typeList = 'all'
                    />
                             
                )
            })

            
            : typeList === 'active' ? 
            
            items.filter(item1 => item1.completed === false).map((item) => {           
           
            const {id, title, completed} = item;   
                
                return ( 
                    <Fragment>
                    <Input
                    key={id.toString()} value={id}
                    id = {id}
                    title = {title}
                    completed = {completed}
                    items = {items}
                    setList = {setList}
                    editItem = {editItem}
                    active = {active}
                    setActive = {setActive}
                    typeList = 'active'
                    handleChange = {handleChange}
                    />   
                    </Fragment>
                          
                )
            })
            

            : items.filter(item1 => item1.completed === true).map((item) => {            
           
            const {id, title, completed} = item;   
    
                return (    
                    <Input
                    key= {id.toString()} value={id}
                    id = {id}
                    title = {title}
                    items = {items}
                    completed = {completed}
                    setList = {setList}
                    removeItem = {removeItem}
                    editItem = {editItem}
                    active = {active}
                    setActive = {setActive}
                    typeList = 'completed'
                    handleChange = {handleChange}
                   />                             
                )
            })

        } 

   

        </Fragment>
    )
}

export default List

 