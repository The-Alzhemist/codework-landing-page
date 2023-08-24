export interface FormCheckboxInterface {
    labelName: string;
    inputName: string;
    register:any
    errors?:any
    isRequired: boolean;
    checkboxList:{
        value: string;
        label: string;
    }[],
    isShowOtherChannel:boolean,
    setIsShowOtherChannel: React.Dispatch<React.SetStateAction<boolean>>
}