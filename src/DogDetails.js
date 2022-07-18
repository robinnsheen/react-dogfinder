import React from "react";
import { Link } from "react-router-dom";

/** Dog component with name param.
 *  Returns name and image of dog, and button home
 *
 *  Props:
 *  -name
 *  -age
 *  -src
 *  -facts
 *
 *  App -> Dog
 * */
function DogDetails({name, age, src, facts}) {
  console.log(name);
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <ul></ul>
      <img src={`../public/${src}.jpg`}></img>
      <Link to="/dogs">Home</Link>
    </div>
  )
}

export default DogDetails;