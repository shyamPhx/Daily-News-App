import React from "react";
import loading from "../loading.gif";
const SpinnerComponent = () => {
  return (
    <div className='text-center spinner'>
      <img src={loading} alt='loading' />
    </div>
  );
};

export default SpinnerComponent;
