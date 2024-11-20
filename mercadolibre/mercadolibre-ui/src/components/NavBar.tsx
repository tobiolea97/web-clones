import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex bg-customYellow">
      <div className="h-100 w-48">
        <img src="./header/logo.png" alt="Logo 25 años" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
