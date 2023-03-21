import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="App">
        <h2>Harvard Art Museum</h2>
        <p>
          Look, but Don't Touch. Please select Gallery in the navigation bar
        </p>
        <nav>
          <NavLink to="/galleries">Gallery</NavLink>
        </nav>
      </div>
    </>
  );
}
