import React, { useEffect, useState } from "react";
import { WithFormSpreeFormProps } from "./interface";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useForm as useFormSpree } from "@formspree/react";
import {
  PRIVATE_MAIL_TEST,
  FORMSPREE_LANDING_TEST_KEY,
  FORMSPREE_LANDING_KEY,
  FORMSPREE_PRODUCTION_LANDING_KEY,
} from "@/config/environment";

const withFormSpreeForm = (Component: React.FC<WithFormSpreeFormProps>) => {
  const Hoc = () => {
    const hookForm = useForm<FieldValues>({
      defaultValues: {
        channels: {
          searchEngine: false,
          social: false,
          friend: false,
          other: false,
        },
      },
    });
    const { register, handleSubmit, formState, reset, control, watch } =
      hookForm;
    const { errors, isValid } = formState;
    const [state, sendDataToFromSpree] = useFormSpree(FORMSPREE_PRODUCTION_LANDING_KEY);
    const isShowOtherChannel = watch("channels.other");

    useEffect(() => {
      if (!state.submitting && !state.errors && state.succeeded) {
        reset();
      }
    }, [reset, state.submitting, state.errors, state.succeeded]);
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
      try {
        const formData = new FormData();
        formData.append("Name ", data.name);
        formData.append("Company name ", data.companyName || "-");
        formData.append("Email ", data.email);
        formData.append("Phone number ", `(+66)${data.phoneNumber}`);
        formData.append("Preferred time slots ", data.timeSlot || "-");
        formData.append("Time Period ", data.timePeriod || "-");
        formData.append("Tell us your idea ", data.idea);
        formData.append("Budget ", data.budget || "-");
        formData.append(
          "How did you hear about us ",
          `Search Engine: ${data.channels.searchEngine || "-"} 
           Social Media: ${data.channels.social || "-"} 
           Friend: ${data.channels.friend || "-"} 
           Other channel: ${data.channels.other || "-"}`
        );

        if(data.channels.other) {
          formData.append("Other Channel ", data?.Others || "-");
        }

        if (data?.attachment) {
          formData.append("Attachment ", data?.attachment || "-");
        }

        await sendDataToFromSpree(formData);
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
      onSubmit,
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withFormSpreeForm;