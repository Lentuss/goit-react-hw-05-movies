import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <p>
      Page not found, go to <Link to="/">home page</Link>
    </p>
  );
};

export default NotFound;
