import "./App.css";
import React, { useState } from "react";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import DogDetails from "./DogDetails";
import DogList from "./DogList";
import axios from "axios";

/** App: manges the routes for dog finder website
 *
 *  States:
 *  - isLoaded
 *  - dogs
 *
 *
 * App -> { Nav,DogList,DogDetails }
 */

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dogs, setDogs] = useState([]);
  console.log("app component rendered", "dogs: ", dogs, "isLoaded: ", isLoaded);

  // makes an ajax requiest to server to get dogs info
  async function toggle() {
    const res = await axios.get("http://localhost:5001/dogs");
    console.log(res);
    setDogs(res.data);
    setIsLoaded((currState) => !currState);
  }

  if (isLoaded === false) {
    toggle();
  }

  let names = dogs.map((dog) => dog.name);
  console.log("dogs after if statement =", dogs);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav names={names} />
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
