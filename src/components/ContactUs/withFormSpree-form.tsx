import React, { useState } from "react";
import { FormValues, WithFormSpreeFormProps } from "./interface";
import { useForm } from "react-hook-form";

const withFormSpreeForm = (Component: React.FC<WithFormSpreeFormProps>) => {
  const Hoc = () => {
    const [isShowOtherChannel, setIsShowOtherChannel ] = useState<boolean>(false);
    const hookForm = useForm<FormValues>();
  const { register, handleSubmit, formState } = hookForm;
  const { errors, isValid } = formState;
    const newProps:WithFormSpreeFormProps = {
      isShowOtherChannel,
      setIsShowOtherChannel,
      register,
      handleSubmit,
      errors,
      isValid
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withFormSpreeForm;

