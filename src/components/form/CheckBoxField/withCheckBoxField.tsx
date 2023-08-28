import React from 'react'
import { InputFieldAcceptProps, InputFieldProps } from './interface'


const withCheckBoxField = (Component: React.FC<InputFieldProps>) => {
  const Hoc = ({
    type,
    isShowPassword,

    ...props
  }: InputFieldAcceptProps) => {

    
    const newProps = {
      ...props,
    }


    return <Component {...newProps} />
  }

  return Hoc
}

export { withCheckBoxField }
