import React, { useEffect, useState } from "react";
import { WithFormSpreeFormProps } from "./interface";
import { FieldValues, useForm } from "react-hook-form";
import { useForm as useFormSpree } from "@formspree/react";
import { PRIVATE_MAIL_TEST, FORMSPREE_LANDING_TEST_KEY, FORMSPREE_LANDING_KEY, FORMSPREE_PRODUCTION_LANDING_KEY } from "@/config/environment";

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
    const { register, handleSubmit, formState, reset, control, watch, } = hookForm;
    const { errors, isValid } = formState;
    const [state, sendDataToFromSpree] = useFormSpree(FORMSPREE_PRODUCTION_LANDING_KEY);

    const isShowOtherChannel = watch('channels.other')

    
    // useEffect(() => {
    //   if (!state.submitting && !state.errors && state.succeeded) {
    //     reset(); 
    //   }
    // }, [reset, state.submitting, state.errors, state.succeeded]);

    const onSubmit = async (data:any) => {
      console.log('data >>', data)
      try {
        const formData = new FormData();
        formData.append('idea', data.idea);
        formData.append('budget', data.budget);
        // ... append other form data
    
        if (data?.attachment) {
          console.log(data?.attachment)
          formData.append('attachment', data?.attachment);
        }

  
  
        const response = await sendDataToFromSpree(formData);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    
    const newProps: WithFormSpreeFormProps = {
      register,
      handleSubmit,
      errors,
      isValid,
      state,
      control,
      sendDataToFromSpree,
      isShowOtherChannel,
      onSubmit
    };

    
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withFormSpreeForm;
