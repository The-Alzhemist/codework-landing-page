import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

export interface FormSelectedInterface {
    labelName: string;
    inputName: string;
    optionList:{ value: string; text: string; }[];
    register:(name: string, options?: RegisterOptions) => UseFormRegisterReturn;
    errors?:string
    isRequired: boolean;
}