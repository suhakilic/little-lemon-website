import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import BookingPage from './components/BookingPage';
import Menu from './components/Menu';
import React, { useState } from "react";
import ConfirmedBooking from './components/ConfirmedBooking';
import Login from './components/Login';
import OrderOnline from './OrderOnline';

function App() {

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  const [time, setTime] = useState(availableTimes[0])

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/reservation' element={<BookingPage availableTimes={availableTimes} time={time} timeChange={(e) => setTime(e.target.value)} />}/>
        <Route path='/orderonline' element={<OrderOnline/>}/>
        <Route path='/confirmedbooking' element={<ConfirmedBooking/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
