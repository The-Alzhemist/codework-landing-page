import { FieldErrors, FieldValues, RegisterOptions, SubmitHandler, UseFormHandleSubmit, UseFormRegisterReturn } from "react-hook-form";
import { SubmissionSuccess, SubmissionError } from '@formspree/core';

export interface ContactFormTypes {
  email: string;
  name: string;
  CompanyName: string;
  phoneNumber: number;
  timeSlot: string;
  timePeriod: string;
  budget: string;
  idea: string;
  channels: string;
  otherChannel: string;
}

  export interface WithFormSpreeFormProps {
    isShowOtherChannel: boolean;
    setIsShowOtherChannel: React.Dispatch<React.SetStateAction<boolean>>;
    register:any
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
