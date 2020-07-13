import React from 'react';
import './App.css';

      
function App() {
  return (
    <div className="container">
     
     <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
               </div>
               <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="name" class="from-control" id="name" placeholder="Name"></input>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
              <br></br>
            <center><button type="submit" class="btn btn-primary">Submit</button></center>
            </div>
    </div>
  );
}

export default App;
