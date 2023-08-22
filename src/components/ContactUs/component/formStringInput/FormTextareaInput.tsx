import React from "react";

const FormTextareaInput = ({ labelName, inputName, register, errors, isRequired }: any) => {
  return (
    <>
      <label className="flex" htmlFor={inputName ? inputName : ''}>
            {labelName} <span className="text-red-500">*</span>
          </label>
          <textarea
            className={`appearance-none border rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline  ${errors && 'border-red-500'}`}
            id={inputName}
            {...register(inputName, {
              required: {
                value: isRequired,
                message: `${labelName} is required`,
              },
            })}
            placeholder="Write something ..."
          />
           {/* {errors && <p className="text-red-500 mb-5">{errors}</p>} */}
          
    </>
  );
};

export default FormTextareaInput;
