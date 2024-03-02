import './App.css'
import { BikeView } from './components/bikes/bikes';
import { CarView } from './components/cars/cars'
import { Users } from './components/users/user';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <BikeView /> 
      <CarView />
      <Users />
    </div>
  )
}

export default App