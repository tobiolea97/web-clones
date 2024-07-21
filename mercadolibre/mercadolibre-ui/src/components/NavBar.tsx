import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='bg-customYellow'>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
