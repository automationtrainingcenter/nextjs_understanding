import Card from "../ui/Card";
import styles from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={styles.li}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.alt} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button>To Favourites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
