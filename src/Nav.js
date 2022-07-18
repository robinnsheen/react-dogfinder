import { Link } from "react-router-dom";

/** Nav: links to dogs
 *
 * props:
 * - names: an array of names
 *
 * App -> Nav
 */

function Nav({ names }) {
  console.log("in Nav:", names);

  return (
    <div>
      <h1> Welcome to our Dog Finder website!!</h1>
      <nav className="NavBar">
        {names.map((dName) => (
          <Link key={`${dName}`} to={`/dogs/${dName}`}>
            {dName}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Nav;
