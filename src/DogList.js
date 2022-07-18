import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

/** List of dogs
 *  Returns name and image of dog, and button home
 *
 *  Prop:
 *  - list of dog objects
 *
 *  App -> Dog
 * */

function DogList({ dogs }) {
  return (
    <ul>
      {dogs.map((d) => (
        <li key={d.name}>
          <div>
            <h1>{d.name}</h1>
            <p>Age: {d.age}</p>
            <img src={require(`../public/${d.src}.jpg`)}></img>
            <Link to={`/dogs/${d.name}`}> visit {d.name}</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default DogList;
