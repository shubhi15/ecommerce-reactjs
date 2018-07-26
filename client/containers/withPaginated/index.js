
import React, { Component } from 'react';
export const  withPaginated = (conditionFn2) => (Component) => (props) =>
{
  
  return (
    <div className="composed-component-container">
    <Component {...props} />

    <div className="product-footer">
      {
        conditionFn2(props) &&
          <button
            type="button"
            className = "load-more-style"
            onClick={() => props.onPaginatedSearch()}
          >
           Load More
          </button>
      }
    </div>
  </div>
  )
};
 