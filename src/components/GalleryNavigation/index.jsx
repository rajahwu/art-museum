import { NavLink } from "react-router-dom";
import './GalleryNavigaiton.css'

export default function GalleryNavigation({ galleries }) {
  return (
    <nav>
      <h1>Galleries</h1>
      <ul>
        <NavLink to="/">Home</NavLink>
        {galleries.map((gallery) => (
          <li key={gallery.id}>
            <NavLink to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
