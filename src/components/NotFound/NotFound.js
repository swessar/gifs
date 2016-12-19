import React from "react";

const NotFound = ({location}) => {
  return (
    <div className="Site-region">
      <h1>404! {location.pathname}</h1>
    </div>
  )
}

export default NotFound;
