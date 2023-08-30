import { Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { InputFieldProps } from "./interface";

const FileUploadField = ({
  name,
  control,
  rules,
  disabled,
  type,
  label,
  className,
  inputClassName,
  placeholder,
  required = false,
  maxLength,
}: InputFieldProps) => (
  <>
    <div>
      <label htmlFor="attachment">Upload File:</label>
      <Controller
        name="attachment"
        control={control}
        defaultValue={null}
        render={({ field }) => (
            // <input
            //   type="file"
            //   onChange={(e) => field.onChange(e.target.files?.[0])}
            // />
            // <input
            // id="dropzone-file"
            // name={name}
            //   type="file"
            //   onChange={(e) => field.onChange(e.target.files)}
             
            // />
            // data?.attachment
            <input type="file" name={field.name}   />
    
        )}
      />
    </div>
  </>
);

export default FileUploadField;
