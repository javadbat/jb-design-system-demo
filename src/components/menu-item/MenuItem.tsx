import { Link } from "react-router-dom";
import "./styles.css";
type Props = {
  link: string;
  ComponentName: string;
};
export function MenuItem(props: Props) {
  return (
    <Link to={props.link} className="menu-item-wrapper">
      {props.ComponentName}
      <br />
    </Link>
  );
}
