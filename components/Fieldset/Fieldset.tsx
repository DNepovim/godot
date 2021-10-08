import styled from "@emotion/styled"
import React from "react"

export interface FieldProps {
  label?: string
  name: string
}

export const Fieldset: React.FC<FieldProps> = props => {
  return (
    <FieldWrapper>
      {props.label && <FieldLabel htmlFor={props.name}>{props.label}:</FieldLabel> }
      {props.children}
    </FieldWrapper>
  )
}

const FieldWrapper = styled.fieldset`
  display: block;
  margin-bottom: 16px;
  border: none;
`

const FieldLabel = styled.label`
  display: block;
`
