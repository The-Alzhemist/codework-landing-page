import { FieldErrors, FieldValues, SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import { SubmissionSuccess, SubmissionError } from '@formspree/core';

export type ContactFormTypes = {
    idea: string;
    budget: string;
    name: string;
    email: string;
    timeSlot: string;
    timePeriod: string;
    phoneNumber: number;
    CompanyName: string;
    channels: string
  };

  export interface WithFormSpreeFormProps {
    isShowOtherChannel: boolean;
    setIsShowOtherChannel: React.Dispatch<React.SetStateAction<boolean>>;
    register: any; 
    handleSubmit: UseFormHandleSubmit<ContactFormTypes, undefined>;
    errors: FieldErrors<ContactFormTypes>; 
    isValid: boolean; 
    state:{
      errors: SubmissionError<FieldValues> | null;
      result: SubmissionSuccess | null;
      submitting: boolean;
      succeeded: boolean;
  }
    sendDataToFromSpree:SubmitHandler<FieldValues>
  }
