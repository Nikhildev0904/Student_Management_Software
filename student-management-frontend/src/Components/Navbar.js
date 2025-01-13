import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/add">Add Student</Link>
    </nav>
  );
}

export default Navbar;
