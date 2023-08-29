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
  otherOptionName
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
            {checkboxList.map((option: Array<string>, index: number) => (
              <>
                <div key={`${option[index]}`}>
                  <input
                    type="checkbox"
                    value={option}
                    checked={field.value && field.value.includes(option)}
                    onChange={() => {
                      const selectedOptions = field.value || [];
                      console.log('selectedOptions >>>', selectedOptions)
                      console.log('selectedOptions.includes(option) >>', selectedOptions.includes(option))
                      const updatedOptions = selectedOptions.includes(option)
                        ? selectedOptions.filter(
                            (selected: string[]) => selected !== option
                          )
                        : [...selectedOptions, option];
                           console.log('updatedOptions >>>', updatedOptions)
                      field.onChange(updatedOptions);
                      console.log('field.onChange(updatedOptions); >>>', field.onChange(updatedOptions))
                    }}
                    disabled={disabled}
                    className={twMerge(`mx-2 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed  ${error && 'border-red-500 border'}`, inputClassName)}
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
                            (selected: string) => selected !== "Other option"
                          )
                        : [...field.value, "Other option"];
                      field.onChange(updatedOptions);
                    }}
                    disabled={disabled}
                    
                  />
                 {otherOptionName && <label>{otherOptionName}</label>} 
                </div>
                {field.value?.includes("Other option") && (
                  <InputField
                    name="Others"
                    control={control}
                    rules={{
                      required: { value: false, message: "" },
                    }}
                    placeholder="Write something..."
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
