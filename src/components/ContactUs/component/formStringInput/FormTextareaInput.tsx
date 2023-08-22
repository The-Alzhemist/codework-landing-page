import React from "react";

const FormTextareaInput = ({ labelName, inputName, register, errors, isRequired }: any) => {
  return (
    <>
      <label className="flex" htmlFor={inputName}>
            {labelName} <span className="text-red-500">*</span>
          </label>
          <textarea
            className="appearance-none border rounded py-2 px-3 w-full text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id={inputName}
            placeholder="Write something ..."
            {...register(inputName, {
              required: {
                value: true,
                message: `${labelName} is required`,
              },
            })}
          />
          {isRequired && <p className="text-red-500 mb-5">{errors}</p>}
    </>
  );
};

export default FormTextareaInput;
