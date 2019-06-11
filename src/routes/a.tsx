import React from 'react';

export default (props) => {
  return (
    <div>
      <p style={{ textAlign: 'center' }}>
        route a
      </p>
      <div style={{ textAlign: 'center' }}>PrivateRoute (routes/PrivateRoute.js)</div>
      { props.children }
    </div>
  );
}