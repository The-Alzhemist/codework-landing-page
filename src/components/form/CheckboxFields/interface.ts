import { Control, RegisterOptions } from 'react-hook-form'

export interface CheckboxFieldProps {
  control: Control<any, any>
  name: string
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >

  className?: string
  label: string
  labelClassName?: string
  checked?: any
  disabled?:any,
  inputClassName?:any,
}
