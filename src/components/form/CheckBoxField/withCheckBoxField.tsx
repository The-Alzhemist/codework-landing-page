import React from 'react'
import { CheckboxFieldProps } from './interface'



const withCheckBoxField = (Component: React.FC<CheckboxFieldProps>) => {
  const Hoc = ({
    ...props
  }: CheckboxFieldProps) => {

    const newProps = {
      ...props,
    }


    return <Component {...newProps} />
  }

  return Hoc
}

export { withCheckBoxField }
