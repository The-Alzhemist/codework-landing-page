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
      {/* <label className="flex" htmlFor={inputName}>
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
        <option value="-">Select time period</option>
        <option value="13.00-14.00">13.00-14.00</option>
        <option value="14.00-16.00">14.00-16.00</option>
        <option value="17.00-18.00">17.00-18.00</option>
      </select>
      {errors && <p className="text-red-500 mb-5">{errors}</p>} */}
      
              <label className="flex" htmlFor={inputName}>
              {labelName} {isRequired && <span className="text-red-500">*</span>}
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                  errors && "border-red-500"
                }`}
                type="text"
                id={inputName}
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
