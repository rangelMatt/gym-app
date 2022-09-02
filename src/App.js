import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function createAlert() {
  alert('Hello. You clicked me');
}

function App() {
  return (
    <div className="App">
      <Header info="This is MY message"/>
      <p>main content</p>
      <Footer trademark="page by Matt"
      myAlert={createAlert}/>
    </div>
  );
}

export default App;
