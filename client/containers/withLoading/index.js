
import React, { Component } from 'react';
export const  withLoading = (conditionFn) => (Component) => (props) =>
<div>
  <Component {...props} />

  <div className="interactions">{conditionFn(props) && <span>Loading...</span>}
  </div>
</div>