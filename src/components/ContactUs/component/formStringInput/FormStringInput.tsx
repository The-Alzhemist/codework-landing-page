import React from "react";

const FormStringInput = ({ labelName, inputName, register, errors, isRequired }: any) => {
  return (
    <>
      <label className="flex" htmlFor={inputName}>
        {labelName} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        type="text"
        id={inputName}
        {...register(inputName, {
          required: {
            value: isRequired,
            message: `${labelName} is required`,
          },
        })}
      />
      {isRequired && <p className="text-red-500 mb-5">{errors}</p>}
    </>
  );
};

export default FormStringInput;
