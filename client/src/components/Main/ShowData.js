import React from "react";

const ShowData = (props) => {
  console.log(props);

  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};

export default ShowData;