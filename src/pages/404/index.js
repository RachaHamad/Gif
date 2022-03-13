import { Link } from 'react-router-dom';
import './404.css';

export default () => {
  return (
    <div className="NotFound">
      <span className="fourohfour">404</span> NOT FOUND
      <Link to="/">Take me back!</Link>
    </div>
  );
};
