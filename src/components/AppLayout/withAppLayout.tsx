
import React from "react";
import { FunctionComponentType } from "../../../interfaces/FunctionComponentType";

const withAppLayout = (Component: React.FC<FunctionComponentType>) => {
  const Hoc = (props: FunctionComponentType) => {
    const newProps = { ...props };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withAppLayout;
