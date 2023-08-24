import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

export interface FormEmailInterface {
    labelName: string;
    inputName: string;
    register:(name: string, options?: RegisterOptions) => UseFormRegisterReturn;
    errors?:string
    isRequired: boolean;
}