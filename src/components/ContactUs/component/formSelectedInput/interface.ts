import { FieldError, FieldErrorsImpl, FieldValues, Merge, RegisterOptions, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { ContactFormTypes } from "../../interface";

export interface FormSelectedInterface {
    labelName: string;
    inputName: string;
    optionList:{ value: string; text: string; }[];
    register:UseFormRegister<FieldValues>
    errors?:string |FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
    isRequired: boolean;
}