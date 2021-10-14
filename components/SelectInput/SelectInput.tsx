import { Field } from "formik"
import React from "react"
import { FieldProps, Fieldset } from "../Fieldset/Fieldset"

export interface SelectInputProps extends FieldProps {
  options: {
    label: string
    value: string
  }[]
}

export const SelectInput: React.FC<SelectInputProps> = (props) => (
  <Fieldset {...props}>
    <Field {...props} as="select">
      {props.options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
    </Field>
  </Fieldset>
)
