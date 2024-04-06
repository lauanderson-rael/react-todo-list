import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types'
import './style.css'


export function NewTodo({onNewTodo}) {

    const ENTER_KEY = 13
    const ESCAPE_KEY = 27


    const [value, setValue] = useState('');
    function onChange (event){
        setValue(event.target.value)

    }

    const submit = () =>{
        if(onNewTodo){
            onNewTodo(value)
            eraser()
        }
    }

    const eraser = () => {
        setValue('')
    }

    const onKeyDown = (event) => {
        if (event.which === ENTER_KEY){
            submit()
        }else if (event.which === ESCAPE_KEY){
            eraser()
        }
    }

    return (
    <input
        className='new-todo'
        placeholder='What do you need to do?'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}/>
  )
}



NewTodo.prototypes = {
    onNewTodo: PropTypes.func.isRequired
}
