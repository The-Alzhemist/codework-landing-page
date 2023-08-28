import { Control, RegisterOptions } from 'react-hook-form'
import { ReactElement } from 'react'

export type TextAreaFieldProps = {
  name: string
  control: Control<any, any>
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
  label?: string | ReactElement
  isShowPassword?: boolean
  suffixIcon?: React.ReactNode
  inputClassName?: string
  disabled?: boolean
  placeholder?: string
  className?: string
  type?: string
  required?: boolean
  maxLength?: number
  rows?: number
}


