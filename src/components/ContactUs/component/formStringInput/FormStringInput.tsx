import React from "react";
import { FormStringInterface } from "./interface";

const FormStringInput = ({ labelName, inputName, register, errors, isRequired }: FormStringInterface) => {
  return (
    <>
      <label className="flex" htmlFor={inputName}>
        {labelName} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 ${errors && 'border-red-500'}`}
        type="text"
        id={inputName}
        placeholder="Write something ..."
        {...register(inputName, {
          required: {
            value: isRequired,
            message: `${labelName} is required`,
          },
        })}
      />
      {/* {isRequired && <p className="text-red-500 mb-5">{errors}</p>} */}
    </>
  );
};

export default FormStringInput;
