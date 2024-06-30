import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayComp, { GradientCircle } from './components/DisplayComp';

function App() {

  return (
    <div className="!bg-primary  min-h-[100vh]">
      <GradientCircle />

      <DisplayComp />


    </div>
  );
}

export default App;
