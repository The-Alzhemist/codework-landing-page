import React from "react";
import FormStringInput from "../formStringInput/FormStringInput";

const FormCheckboxInput = ({
  inputName,
  labelName,
  checkboxList,
  register,
  isShowOtherChannel,
  setIsShowOtherChannel,
}: any) => {
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
                {...register(inputName)}
                className="mr-2"
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
    </>
  );
};

export default FormCheckboxInput;
