import React, { useState } from 'react';
import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';
import './global.css';
import { Footer } from './components/Footer/Footer';
const App = () => {
    const [todos, setTodos] = useState([])
    const onNewTodo = (value) => {
        setTodos([
            ...todos,
            { id: new Date().getTime(), title: value, checked: false }])
    }

    const onToggle = (todo) => {
        setTodos(todos.map((obj) => (obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj)))
        // If else ternario e !todo.checked = contrario, true
    }

    const onRemove = (todo) => {
        setTodos(todos.filter((obj) => obj.id !== todo.id))
    }

    return (

        <section id="app" className='container'>
            <header>
                <h1 className='title'>To do List</h1>
            </header>
            <section className='main'>
                <NewTodo onNewTodo={onNewTodo} />
                <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
            </section>
            <Footer />
        </section>

    );

};

export default App;
