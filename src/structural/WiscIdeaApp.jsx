import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WiscIdeaHome from '../content/WiscIdeaHome';
import WiscIdeaNoMatch from '../content/WiscIdeaNoMatch.jsx';
import WiscIdeaNavBar from './WiscIdeaNavBar.jsx';
import WiscIdeaTemplate from '../content/WiscIdeaContentTemplate.jsx'
import classes from "./style.module.css";

function WiscIdeaApp() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
     <WiscIdeaNavBar isOpen = {isOpen} setIsOpen={setIsOpen} />
     <div className={isOpen ? `${classes.mainContent} ${classes.sidebarOpen}` : classes.mainContent}>
        <Routes className={`${classes.sidebarOpen}`}>
            <Route index element={<WiscIdeaHome/>} />
            <Route path="/home" element={<WiscIdeaHome />}></Route>
            <Route path="/template" element={<WiscIdeaTemplate />}></Route>
            <Route path="*" element={<WiscIdeaNoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default WiscIdeaApp;
