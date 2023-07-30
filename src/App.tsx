import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Navigation from './component/navigation';
import Home from './component/home';
import Project from './component/project';
function App() {
  var name:string[] = [];
  var object: any = {
    humanName : 'jewel',
    home: "unknown",
    age: 8800,

  };
  for(const value in object){
    name.push(object[value]);
  };
  return (
    <div className="app font-sans bg-[#EEEEEE] p-5">
      <div className="flex flex-row">
        <div className='basis-3/4'>
          <h1 className='text-4xl'>IBRAHIM HOSSAIN</h1>
          <p className='text-xl'>Front End Engineer</p>
        </div>
        <div className='basis-1/4 '>
        <img className="w-16 sm:w-32 md:w-32 lg:w-48 float-right" src={require("./images/nationalflag.png")} alt="Modern building architecture" />
        </div>
      </div>
      <div className='navigation'>
        <Router>
          <Navigation />
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path="/projects" element = {<Project />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
