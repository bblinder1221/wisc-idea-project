import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WiscIdeaHome from '../content/WiscIdeaHome';
import WiscIdeaNoMatch from '../content/WiscIdeaNoMatch.jsx';
import WiscIdeaNavBar from './WiscIdeaNavBar.jsx';

function WiscIdeaApp() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WiscIdeaNavBar/>}>
          <Route index element={<WiscIdeaHome/>} />
          <Route path="/home" element={<WiscIdeaHome />}></Route>
          {/* 
          <Route path="/register" element={<BadgerRegister />}></Route>
          <Route path="/logout" element={<BadgerLogout />}></Route> */}
          <Route path="*" element={<WiscIdeaNoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default WiscIdeaApp;
