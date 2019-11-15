import React from 'react';
import './Spinner.css';

const spinner = () => (
  <div className="preloader-wrapper big active">
    <div className="spinner-layer spinner-red-only">
      <div className="circle-clipper left">
        <div className="circle"></div>
      </div><div className="gap-patch">
        <div className="circle"></div>
      </div><div className="circle-clipper right">
        <div className="circle"></div>
      </div>
    </div>
  </div>
);

export default spinner;
