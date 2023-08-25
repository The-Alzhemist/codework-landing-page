import { FieldError, FieldErrorsImpl, FieldValues, Merge, RegisterOptions, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

export interface FormStringInterface {
    labelName: string;
    inputName: string;
    register:UseFormRegister<FieldValues>
    errors?:string |FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
    isRequired: boolean;
}