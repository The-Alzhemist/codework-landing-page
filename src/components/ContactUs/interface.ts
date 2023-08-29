import {
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
  isShowOtherChannel: boolean;
  setIsShowOtherChannel: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  errors: FieldErrors<FieldValues>;
  isValid: boolean;
  control: any;
  state: {
    errors: SubmissionError<FieldValues> | null;
    result: SubmissionSuccess | null;
    submitting: boolean;
    succeeded: boolean;
  };
  sendDataToFromSpree: SubmitHandler<FieldValues>;
}
