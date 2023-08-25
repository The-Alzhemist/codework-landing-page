import React from "react";
import FormStringInput from "../formStringInput/FormStringInput";
import { FormCheckboxInterface } from "./interface";

const FormCheckboxInput = ({
  inputName,
  labelName,
  checkboxList,
  register,
  isShowOtherChannel,
  setIsShowOtherChannel,
  errors,
  isRequired
}: FormCheckboxInterface) => {
  return (
    <>
      <label htmlFor={labelName}>{labelName}</label>
      <div className="flex flex-col sm:flex-row flex-wrap gap-x-5">
        {checkboxList.map((item: any, index: number) => (
          <React.Fragment key={`checkbox-${inputName}-${index}`}>
            <div className="">
              <input
                type="checkbox"
                value={item.value}
                className="mr-2"
                {...register(inputName, {
                  required: {
                    value: isRequired,
                    message: `${labelName} is required`,
                  },
                })}
                
              />
              <label htmlFor={inputName}>{item.label}</label>
            </div>
          </React.Fragment>
        ))}

        {/* other channel with input field */}
        <div className="">
          <div>
            <input
              type="checkbox"
              value="OtherChannel"
              {...register(inputName)}
              className="mr-2"
              onChange={(e) =>
                e.target.checked
                  ? setIsShowOtherChannel(true)
                  : setIsShowOtherChannel(false)
              }
            />
            <label htmlFor="">Other (please specify)</label>
          </div>

          {isShowOtherChannel && (
            <div className="w-full sm:w-[190px]">
              <FormStringInput
                labelName=""
                inputName="otherChannel"
                register={register}
                isRequired={false}
              ></FormStringInput>
            </div>
          )}
        </div>

        
      </div>
      {errors && typeof errors === "string" ?   <p className="text-red-500 mb-3 text-xs">{errors}</p> : ''}
    </>
  );
};

export default FormCheckboxInput;
