import {
  Control,
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { SubmissionSuccess, SubmissionError } from "@formspree/core";

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
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  errors: FieldErrors<FieldValues>;
  isValid: boolean;
  control:  Control<FieldValues, any>;
  state: {
    errors: SubmissionError<FieldValues> | null;
    result: SubmissionSuccess | null;
    submitting: boolean;
    succeeded: boolean;
  };
  sendDataToFromSpree: SubmitHandler<FieldValues>;
}
