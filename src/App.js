import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Header info="This is MY message"
      myNumber="6"/>
      <p>main content</p>
      <Footer trademark="page by Matt"/>
    </div>
  );
}

export default App;
