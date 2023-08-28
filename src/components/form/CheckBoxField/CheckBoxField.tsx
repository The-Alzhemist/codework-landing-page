import { Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import React from "react";
import { withCheckBoxField } from "./withCheckBoxField";
import InputField from "../InputField/InputField";
import { CheckBoxFieldProps } from "./interface";

const CheckBoxField = ({
  name,
  control,
  rules,
  disabled,
  label,
  className,
  inputClassName,
  required = false,
  checkboxList,
  checked,
  isShowOtherOption = false,
  otherOptionName = "OtherOption",
}: CheckBoxFieldProps) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    defaultValue=""
    render={({ field, fieldState: { error } }) => (
      <div
        className={twMerge(
          "relative flex-wrap w-full items-stretch",
          className
        )}
      >
        {label && (
          <label className="flex">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}

        <div className="relative">
          <div className="flex flex-col sm:flex-row flex-wrap gap-x-5">
            {checkboxList.map((option: any) => (
              <>
                <div key={option}>
                  <input
                    type="checkbox"
                    value={option}
                    checked={field.value && field.value.includes(option)}
                    onChange={() => {
                      const selectedOptions = field.value || [];
                      const updatedOptions = selectedOptions.includes(option)
                        ? selectedOptions.filter(
                            (selected: any) => selected !== option
                          )
                        : [...selectedOptions, option];
                      field.onChange(updatedOptions);
                    }}
                    className={twMerge(`mx-2 ${error && 'border-red-500 border'}`, inputClassName)}
                  />
                  {option}
                </div>
              </>
            ))}

            {isShowOtherOption && (
              <section>
                <div>
                  <input
                    type="checkbox"
                    name={name}
                    value="Other option"
                    checked={
                      field.value && field.value.includes("Other option")
                    }
                    className={twMerge(`mx-2 ${error && 'border-red-500 border'}`, inputClassName)}
                    onChange={() => {
                      const updatedOptions = field.value.includes(
                        "Other option"
                      )
                        ? field.value.filter(
                            (selected: any) => selected !== "Other option"
                          )
                        : [...field.value, "Other option"];
                      field.onChange(updatedOptions);
                    }}
                    
                  />
                  <label>{otherOptionName}</label>
                </div>
                {field.value?.includes("Other option") && (
                  <InputField
                    name="Others"
                    control={control}
                    rules={{
                      required: { value: false, message: "" },
                    }}
                    placeholder="Write something ..."
                    type="text"
                    label=""
                    className="mb-[12px] ml-2"
                  />
                )}
              </section>
            )}
          </div>
        </div>

        {error && (
          <div className="mt-[8px] text-xs text-red-500 top-full">
            {error.message}
          </div>
        )}
      </div>
    )}
  />
);

const WrappedComponent = withCheckBoxField(CheckBoxField);
export default WrappedComponent;
