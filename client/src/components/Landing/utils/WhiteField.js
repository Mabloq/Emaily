import React from 'react';

export default ({input, label, meta: {error, touched}}) => {
  return (
    <div>
      <label className="label-form" style={{fontSize: '18px'}}>{label}</label>
      <input className="input-form" {...input} style={{marginBottom: '5px'}} />
      <div className="red-text" style={{marginBottom: '20px'}}>
        {touched && error}
      </div>
    </div>
  );
};
