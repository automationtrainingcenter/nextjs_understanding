import { Link } from "react-router-dom";
import styles from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>React Meetups</div>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/" className={styles.Link}>All Meetups</Link>
          </li>
          <li className={styles.li}>
            <Link to="/new-meetup" className={styles.Link}>Add New Meetup</Link>
          </li>
          <li className={styles.li}>
            <Link to="/favs" className={styles.Link}>Favourites</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default MainNavigation;
