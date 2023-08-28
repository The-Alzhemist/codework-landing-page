import { Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { withSelectedField } from "./withSelectedField";
import React from "react";
import { SelectedFieldProps } from "./interface";

const SelectedField = ({
  name,
  control,
  rules,
  disabled,
  label,
  className,
  inputClassName,
  required = false,
  optionList,
}: SelectedFieldProps) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    defaultValue=""
    render={({ field, fieldState: { error } }) => (
      <div className={twMerge("w-full", className)}>
        <div className="relative flex-wrap w-full items-stretch">
          {label && (
            <label className="flex">
              {label} {required && <span className="text-red-500">*</span>}
            </label>
          )}
          <div className="relative">
            <select
               className={`
               border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
               disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed 
               placeholder-gray-400  placeholder:text-md h-[40px]
                 ${error && 'border-red-500 border'}
                 ${inputClassName}
               `}
              value={field.value ?? ""}
              onChange={(e) => field.onChange(e.target.value)}
              disabled={disabled}
            >
              {optionList.map((item: any, index: number) => (
                <React.Fragment key={`option-${item.text}-${index}`}>
                  <option value={item.value} >{item.text}</option>
                </React.Fragment>
              ))}
            </select>
          </div>

          {error && (
            <div className="mt-[8px] text-xs text-red-500 top-full">
              {error.message}
            </div>
          )}
        </div>
      </div>
    )}
  />
);

const WrappedComponent = withSelectedField(SelectedField);
export default WrappedComponent;
