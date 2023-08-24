import { FieldError, FieldErrors, FieldErrorsImpl, FieldValues, Merge, RegisterOptions, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { ContactFormTypes } from "../../interface";

export interface FormCheckboxInterface {
    labelName: string;
    inputName: string;
    register:UseFormRegister<FieldValues>
    errors?:string |FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
    isRequired: boolean;
    checkboxList:{
        value: string;
        label: string;
    }[],
    isShowOtherChannel:boolean,
    setIsShowOtherChannel: React.Dispatch<React.SetStateAction<boolean>>
}