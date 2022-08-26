import './App.css';
import {useEffect, useState} from 'react';
import Header from './Header';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";




function App() {

  const [user, setUser] = useState();

  return (
    <div className="App">
      <Header user={user}></Header>

    </div>
  );
}

export default App;
