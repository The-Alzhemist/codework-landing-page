import { FieldErrors } from "react-hook-form";
import { ContactFormTypes } from "../../interface";

export interface FormCheckboxInterface {
    labelName: string;
    inputName: string;
    register:any;
    errors?:string; 
    isRequired: boolean;
    checkboxList:{
        value: string;
        label: string;
    }[],
    isShowOtherChannel:boolean,
    setIsShowOtherChannel: React.Dispatch<React.SetStateAction<boolean>>
}