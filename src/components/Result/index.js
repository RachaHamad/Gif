import { Link } from 'react-router-dom';
import './result.css';
export default ({ id, username, title }) => {
  return (
    <Link to={`/entry/${id}`} className="Result">
      <span className="resultTitle">{title}</span>
      <span className="resultUsername">by: {username}</span>
    </Link>
  );
};
