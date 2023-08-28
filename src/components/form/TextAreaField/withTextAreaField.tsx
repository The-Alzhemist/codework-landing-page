import React from 'react'
import { TextAreaFieldAcceptProps } from './interface'


const withTextAreaField = (Component: React.FC<TextAreaFieldAcceptProps>) => {
  const Hoc = ({
    type,

    ...props
  }: TextAreaFieldAcceptProps) => {
   
    const newProps = {
     
      ...props,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withTextAreaField }
