import React, { useEffect, useState } from "react";
import { WithFormSpreeFormProps } from "./interface";
import { FieldValues, useForm } from "react-hook-form";
import { useForm as useFormSpree } from "@formspree/react";
import { PRIVATE_MAIL_TEST, FORMSPREE_LANDING_TEST_KEY, FORMSPREE_LANDING_KEY } from "@/config/environment";

const withFormSpreeForm = (Component: React.FC<WithFormSpreeFormProps>) => {
  
  const Hoc = () => {

    const hookForm = useForm<FieldValues>({
      defaultValues: {
        channels: {
          searchEngine: false,
          social: false,
          friend: false,
          other: false
        }
      }
    });
    const { register, handleSubmit, formState, reset, control, watch } = hookForm;
    const { errors, isValid } = formState;
    const [state, sendDataToFromSpree] = useFormSpree(PRIVATE_MAIL_TEST);

    const isShowOtherChannel = watch('channels.other')

    
    useEffect(() => {
      if (!state.submitting && !state.errors && state.succeeded) {
        reset(); 
      }
    }, [reset, state.submitting, state.errors, state.succeeded]);
    
    const newProps: WithFormSpreeFormProps = {
      register,
      handleSubmit,
      errors,
      isValid,
      state,
      control,
      sendDataToFromSpree,
      isShowOtherChannel
    };

    
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withFormSpreeForm;
