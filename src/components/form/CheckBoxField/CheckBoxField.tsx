import { Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";
// import { withInputField } from './withInputField'

import React from "react";
import { InputFieldProps } from "./interface";
import { withCheckBoxField } from "./withCheckBoxField";

const CheckBoxField = ({
  name,
  control,
  rules,
  disabled,
  type,
  label,
  className,
  inputClassName,
  suffixIcon,
  placeholder,
  required = false,
  maxLength,
  checkboxList,
  checked,
}: InputFieldProps) => (
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
              <label key={option}>
                <Controller
                  name="months"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="checkbox"
                      value={option}
                      checked={field.value && field.value.includes(option)}
                      onChange={(e) => {
                        const selectedOptions = field.value || [];
                        const updatedOptions = selectedOptions.includes(option)
                          ? selectedOptions.filter(
                              (selected: any) => selected !== option
                            )
                          : [...selectedOptions, option];
                        field.onChange(updatedOptions);
                      }}
                      className="mx-3"
                    />
                  )}
                />
                {option}
              </label>
            ))}
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
