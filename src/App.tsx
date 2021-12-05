import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar'
import { TodoForm } from './components/TodoForm';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <TodoForm />
      </div>
    </>
  ) 
}

export default App;
