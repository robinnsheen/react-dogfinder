import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

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
function DogDetails({ dogs }) {
  const params = useParams();
  let dog = dogs.find(({ name }) => name === params.name);

  return (
    <div>
      <h1> Name: {dog.name}</h1>
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <img src={require(`../public/${dog.src}.jpg`)}></img>
      <Link to="/dogs">Home</Link>
    </div>
  );
}

export default DogDetails;
