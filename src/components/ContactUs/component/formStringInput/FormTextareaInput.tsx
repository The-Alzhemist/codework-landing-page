import React from "react";
import { FormStringInterface } from "./interface";

const FormTextareaInput = ({ labelName, inputName, register, errors, isRequired }: FormStringInterface) => {
  return (
    <>
      <label className="flex" htmlFor={inputName}>
            {labelName} <span className="text-red-500">*</span>
          </label>
          <textarea
            className={`appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors ? 'border-red-500 mb-0' : 'mb-3'}`}
            id={inputName}
            rows={5}
            {...register(inputName, {
              required: {
                value: isRequired,
                message: `${labelName} is required`,
              },
            })}
            placeholder="Write something ..."
          />
           {errors && <p className="text-red-500 mb-3 text-xs">{errors}</p>}
          
    </>
  );
};

export default FormTextareaInput;
