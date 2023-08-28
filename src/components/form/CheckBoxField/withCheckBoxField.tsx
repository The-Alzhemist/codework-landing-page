import React from 'react'
import { CheckBoxFieldProps } from './interface'


const withCheckBoxField = (Component: React.FC<CheckBoxFieldProps>) => {
  const Hoc = ({
    ...props
  }: CheckBoxFieldProps) => {

    const newProps = {
      ...props,
    }


    return <Component {...newProps} />
  }

  return Hoc
}

export { withCheckBoxField }
