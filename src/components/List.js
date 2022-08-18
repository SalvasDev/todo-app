import React, {Fragment} from 'react'
import Input from './Input';



const List = ( {items, setList, removeItem, editItem, active, setActive, typeList} ) => {
    
  
    return (


        <Fragment>
                         


         { typeList === 'all' ?
         
         
           items.map((item) => {           
           
            const {id, title, completed} = item;   

                       
                return (   
                    
                    <Input
                    key={id.toString()} value={id}
                    id = {id}
                    title = {title}
                    completed = {completed}
                    setList = {setList}
                    editItem = {editItem}
                    active = {active}
                    setActive = {setActive}
                    />
                             
                )
            })

            
            : typeList === 'active' ?

            items.map((item) => {           
           
            const {id, title, completed} = item;   

                return ( 
                    <Fragment>
                    <h1>aqui es active</h1>
                    {console.log('aqui es active')}
                    <Input
                    key={id.toString()} value={id}
                    id = {id}
                    title = {title}
                    completed = {completed}
                    setList = {setList}
                    editItem = {editItem}
                    active = {active}
                    setActive = {setActive}
                    />   
                    </Fragment>
                          
                )
            })


            : 
            items.map((item) => {           
           
            const {id, title, completed} = item;   

                       
                return (    
                    <Input
                    key={id.toString()} value={id}
                    id = {id}
                    title = {title}
                    completed = {completed}
                    setList = {setList}
                    removeItem = {removeItem}
                    editItem = {editItem}
                    active = {active}
                    setActive = {setActive}
                    />                             
                )
            })

        } 

   

        </Fragment>
    )
}

export default List

 