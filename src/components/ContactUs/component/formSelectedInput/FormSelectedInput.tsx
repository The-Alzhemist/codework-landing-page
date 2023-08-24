import React from "react";
import { FormSelectedInterface } from "./interface";
import { SELECTED_OPTION_LIST } from "@/constants/ContactUs/constant";

const FormSelectedInput = ({
  labelName,
  inputName,
  optionList,
  register,
  errors,
  isRequired,
}: FormSelectedInterface) => {
  return (
    <>
      <label className="flex" htmlFor={inputName}>
        <span className="text-white">{labelName}</span>
      </label>
      <select
        className={`border border-gray-300 text-gray-900 text-sm rounded block w-full px-2 h-[38px] ${errors ? 'border-red-500 mb-1' : 'mb-3'}`}
        id={inputName}
        {...register(inputName, {
          required: {
            value: isRequired,
            message: `${labelName} is required`,
          },
        })}
      >
        {optionList.map((item: any, index: number) =>(
          <React.Fragment key={`option-${inputName}-${index}`}>
             <option value={item.value}>{item.text}</option> 
          </React.Fragment>
        ))}
      </select>
      {errors && <p className="text-red-500 mb-3 text-xs">{errors}</p>}
    </>
  );
};

export default FormSelectedInput;
