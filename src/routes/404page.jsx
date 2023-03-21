import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h2>Page Not Found</h2>
      <Link to="/">Go to Home Page</Link>
    </>
  );
}
