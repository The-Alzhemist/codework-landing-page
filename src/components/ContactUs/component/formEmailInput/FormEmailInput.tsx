import React from "react";

const FormEmailInput = ({
  labelName,
  inputName,
  register,
  errors,
  isRequired,
}: any) => {
  return (
    <>
      
              <label className="flex" htmlFor={inputName}>
              {labelName} {isRequired && <span className="text-red-500">*</span>}
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                  errors && "border-red-500"
                }`}
                type="text"
                id={inputName}
                placeholder="Write something ..."
                {...register(inputName, {
                  required: {
                    value: isRequired,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid pattern email address",
                  },
                })}
              />
              
    </>
  );
};

export default FormEmailInput;
