export interface FormSelectedInterface {
    labelName: string;
    inputName: string;
    optionList:{ value: string; text: string; }[];
    register:any
    errors?:any
    isRequired: boolean;
}