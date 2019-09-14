import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="not-found-container">
    404! <Link to="/">Home</Link>
  </div>
);

export default NotFoundPage;
