import React from "react";
import { FormSelectedInterface } from "./interface";

const FormSelectedInput = ({
  labelName,
  inputName,
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
        className="border border-gray-300 text-gray-900 text-sm rounded block w-full px-2 h-[38px]"
        id={inputName}
        {...register(inputName, {
          required: {
            value: isRequired,
            message: `${labelName} is required`,
          },
        })}
      >
        <option value="">Select time period</option>
        <option value="13.00-14.00">13.00-14.00</option>
        <option value="14.00-16.00">14.00-16.00</option>
        <option value="17.00-18.00">17.00-18.00</option>
      </select>
      {errors && <p className="text-red-500 mb-5">{errors}</p>}
    </>
  );
};

export default FormSelectedInput;
