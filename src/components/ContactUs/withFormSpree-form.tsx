import React, { useEffect, useState } from "react";
import { ContactFormTypes, WithFormSpreeFormProps } from "./interface";
import { FieldValues, useForm } from "react-hook-form";
import { useForm as useFormSpree } from "@formspree/react";
import { PRIVATE_MAIL_TEST, FORMSPREE_LANDING_TEST_KEY, FORMSPREE_LANDING_KEY } from "@/config/environment";

const withFormSpreeForm = (Component: React.FC<WithFormSpreeFormProps>) => {
  
  const Hoc = () => {
    const [isShowOtherChannel, setIsShowOtherChannel] =
      useState<boolean>(false);
    const hookForm = useForm<FieldValues>();
    const { register, handleSubmit, formState, reset, control } = hookForm;
    const { errors, isValid } = formState;
    const [state, sendDataToFromSpree] = useFormSpree(FORMSPREE_LANDING_KEY);
    


    useEffect(() => {
      if (!state.submitting && !state.errors && state.succeeded) {
        reset(); 
      }
    }, [state.submitting, state.errors, state.succeeded]);
    
    const newProps: WithFormSpreeFormProps = {
      isShowOtherChannel,
      setIsShowOtherChannel,
      register,
      handleSubmit,
      errors,
      isValid,
      state,
      control,
      sendDataToFromSpree
    };

    
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withFormSpreeForm;
