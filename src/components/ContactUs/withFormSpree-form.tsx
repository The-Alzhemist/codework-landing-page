import React from "react";

const withFormSpreeForm = (Component: React.FC) => {
   
  const Hoc = () => {
    const newProps:any = {
    
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withFormSpreeForm;

