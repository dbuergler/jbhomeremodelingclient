import React from 'react';
import './App.css';
import {Auth} from './components/auth/Auth';
import Home from './components/home/Home';



const App: React.FunctionComponent = () => {

  // const updateToken = (newToken) => {
  //   localStorage.setItem('token', newToken);
  //   setSessionToken(newToken);
  //   console.log(sessionToken);
  // };
  
  // const clearToken = () => {
  //   localStorage.clear();
  //   setSessionToken('');
  // }
  
  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <Home token={sessionToken}/>
  //   : <Auth updateToken={updateToken}/>)
  // }
  return (
    <div className="App">
      <div className="verticalCenter">
      </div>
    </div>
  );
}

export default App;
