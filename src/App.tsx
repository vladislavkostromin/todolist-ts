import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import { Navbar } from './components/Navbar'
import { TodosPage } from './pages/TodosPage'
import { InfoPage } from './pages/InfoPage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route component={TodosPage} path='/' exact/>
          <Route component={InfoPage} path='/info'/>
        </Switch>
      </div>
    </BrowserRouter>
  ) 
}

export default App;
