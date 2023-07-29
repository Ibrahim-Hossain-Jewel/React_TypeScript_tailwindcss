import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var name:string[] = [];
  var object: any = {
    humanName : 'jewel',
    home: "unknown",
    age: 8800
  };
  for(const value in object){
    name.push(object[value]);
  };
  return (
    <div className="h-1">
      <header className="App-header">
        <img src={logo} className="w-16 md:w-32 lg:w-48" alt="logo" />
      </header>
    </div>
  );
}

export default App;
