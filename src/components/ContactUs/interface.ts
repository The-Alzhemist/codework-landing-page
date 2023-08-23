import { UseFormHandleSubmit } from "react-hook-form";

export type FormValues = {
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
    handleSubmit: UseFormHandleSubmit<FormValues, undefined>;
    errors: any; 
    isValid: boolean; 
  }
