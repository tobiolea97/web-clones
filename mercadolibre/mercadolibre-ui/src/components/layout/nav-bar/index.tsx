import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex space-between bg-customYellow">
      <div className="h-100 w-48">
        <img src="./header/logo.png" alt="Logo 25 años" />
      </div>
      <div className="flex-row space-between bg-customYellow">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
