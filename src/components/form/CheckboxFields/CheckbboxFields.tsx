import React from "react";
import { Controller } from "react-hook-form";
import { CheckboxFieldProps } from "./interface";
import { twMerge } from "tailwind-merge";

const CheckboxFieldx = ({
  control,
  name,
  rules,
  label,
  className,
  labelClassName,
  checked,
  disabled,
  inputClassName,
}: CheckboxFieldProps) => (
  <Controller
    control={control}
    rules={rules}
    name={name}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <div className={twMerge("flex flex-wrap  items-center", className)}>
        <input
          type="checkbox"
          checked={value || checked || false} // Set the checked state
          onChange={(e) => {
            onChange(e.target.checked); // Update the checked value
          }}
          disabled={disabled}
          className={twMerge(
            `mx-2 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed`,
            inputClassName
          )}
        />
        {label && <span className={labelClassName}>{label}</span>}
      </div>
    )}
  />
);

export default CheckboxFieldx;