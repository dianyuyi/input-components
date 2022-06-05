import './App.css';

import * as React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import PasswordDemo from 'src/pages/PasswordDemo';
import CalendarDemo from 'src/pages/CalendarDemo';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/password" element={<PasswordDemo />} />
        <Route path="/calendar" element={<CalendarDemo />} />
      </Routes>
    </div>
  );
};

export default App;
