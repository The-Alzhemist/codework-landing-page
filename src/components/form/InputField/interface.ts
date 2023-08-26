import { Control, RegisterOptions } from 'react-hook-form'
import { ReactElement } from 'react'

export type InputFieldAcceptProps = {
  name: string
  control: Control<any, any>
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >

  unit?: string
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
}

export type InputFieldProps = {
  name: string
  control: Control
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >

  unit?: string
  label?: string | JSX.Element
  suffixIcon?: React.ReactNode
  inputClassName?: string
  disabled?: boolean
  placeholder?: string
  className?: string

  type?: string
  required?: boolean
  maxLength?: number
}
