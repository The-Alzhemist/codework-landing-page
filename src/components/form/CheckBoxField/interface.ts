import { Control, FieldValues, RegisterOptions } from 'react-hook-form'
import { ReactElement } from 'react'

export interface CheckBoxFieldProps  {
  name: string
  control: Control<FieldValues>
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
  label?: string | ReactElement
  inputClassName?: string
  disabled?: boolean
  className?: string
  required?: boolean
  checkboxList: Array<string>,
  checked?: boolean | undefined,

  isShowOtherOption: boolean
  otherOptionName: string

}
