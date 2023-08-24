import React from "react";
import { FormDateInterface } from "./interface";

const FormDateInput = ({
  labelName,
  inputName,
  register,
  errors,
  isRequired,
}: FormDateInterface) => {
  return (
    <>
      <label className="flex" htmlFor={inputName}>
        {labelName} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 h-[38px] leading-tight focus:outline-none focus:shadow-outline  ${errors ? 'border-red-500 mb-1' : 'mb-3'}`}
        type="date"
        id={inputName}
        {...register(inputName, {
          required: {
            value: isRequired,
            message: `${labelName} is required`,
          },
        })}
      />
      {errors && <p className="text-red-500 mb-3 text-xs">{errors}</p>}
    </>
  );
};

export default FormDateInput;
