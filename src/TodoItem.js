import React from 'react'

function TodoItem(props){
    return(
        <div className='todo-item'>
            <input 
                type="checkbox" 
                onChange={()=>console.log('changed')} 
                checked={props.item.completed}
                onChange={()=>props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem