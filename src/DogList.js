
import React from "react";
import { Link } from "react-router-dom";
import DogDetails from "./DogDetails";

/** List of dogs
 *  Returns name and image of dog, and button home
 *
 *  Prop:
 *  - list of dog objects
 *
 *  App -> Dog
 * */
function DogList({dogs}) {

  return (
    <div>
      <h1>HellO!</h1>
      {/* <img src={`../public/perry.jpg`}></img> */}
      <Link to="/dogs">Home</Link>
    </div>
  )
}

export default DogList;