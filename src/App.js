import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import login from "../public/login.png";
import swal from "sweetalert";
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleValidate = (e) => {
    e.preventDefault();
    if (user === "reactjs12@gmail.com" && pass === 123456)
      swal("Successful login", "Welcome ReactJS", "success");
    else swal("Wrong credentials", "Please try again", "error");
  };
  return (
    <div className="App-header">
      <h1>Authentication Portal</h1>
      <div className="row">
        <div className="col-md-6">
          <img className="float-right" alt="slow man" src={login} width="600" />
        </div>
        <div className="col-md-6 my-auto bg-dark p-5 rounded">
          <form onSubmit={handleValidate}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                onChange={(e) => setUser(e.target.value)}
                type="email"
                value={user}
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => setPass(e.target.value)}
                type="password"
                value={pass}
                className="form-control"
                placeholder="Enter Password"
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
