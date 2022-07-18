import './App.css';
import React, { useState } from "react";
import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "./Nav";
import DogDetails from "./DogDetails";
import DogList from "./DogList";
import axios from "axios";

/**
 *
 * route: /
 *  - redirect to /dogs
 *
 * route: /dogs
 *  - show all dogs as unordered list (pic, name, link to dog)
 *
 * route: /dogs/:name
 *  - name, pic, go back to /dogs
 *
 * route: /badurl
 *  - redirect back to /dogs
 *
 * components:
 *
 * dogs - links to each dog
 * dog - with pic, name, and go back button
 *
 *
 */

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [dogs, setDogs] = useState([]);
  console.log("app comonent rendered", "dogs: ", dogs, "isLoaded: ", isLoaded)


  async function toggle() {
    const res = await axios.get("http://localhost:5001/dogs");
    console.log(res);
    setDogs(res.data);
    setIsLoaded(currState => !currState);
  }

  if (isLoaded === false) {
    toggle();
  }

  return (
    <div className="App">
      <BrowserRouter>
          <Nav dogs={dogs} />
          <Routes>
            <Route path="/dogs" element={<DogList dogs="he" />} />
            <Route path="/dogs/:name" element={<DogDetails />} />
            <Route path="*" element={<Navigate to="/dogs" />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
