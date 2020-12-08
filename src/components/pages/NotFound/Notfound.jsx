import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>
        Упс, кажется вы потерялись. Перейти{' '}
        <Link to="/">на главную страницу</Link>
      </p>
    </div>
  );
};

export default NotFound;
