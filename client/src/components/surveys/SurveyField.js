//logic to render a single label and tex input

import React from 'react';

export default ({input, label, meta: {error, touched}}) => {
  return (
    <div>
      <label style={{fontSize: '18px'}}>{label}</label>
      <input {...input} style={{marginBottom: '5px'}} />
      <div className="red-text" style={{marginBottom: '20px'}}>
        {touched && error}
      </div>
    </div>
  );
};
