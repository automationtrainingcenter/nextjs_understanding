import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <div>
      <header>
        <div>React Meetups</div>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favs">Favourites</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default MainNavigation;
