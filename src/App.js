import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Input from './components/Input'
import React from 'react';

//Api 
// const api = {
//   key:"5b51d0b7fa4bf8dad71ffdfd1648907b",
//   base:"https://api.openweathermap.org/data/2.5"

// }



function App() {
 
  return (
    <div className="container-fluid">
        <div className="row d-flex justify-content-center min-vh-100 align-items-center">
          <div className="col-12 col-md-6">
            <h2 className="mt-5 text-center text-white">Weather App</h2>
            <Input/>
          </div>
        </div>
    </div>
  );
}

export default App;
