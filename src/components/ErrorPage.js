import React from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="col">
      <h3 className="error"><span role="img" aria-label="Error">❌</span>Something went wrong, can't find page you're looking for.<span role="img" aria-label="Error">❌</span></h3>
    </div>
  )
}

export default ErrorPage;
