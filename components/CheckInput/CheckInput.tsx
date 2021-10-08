import { Field } from "formik"
import React from "react"
import { FieldProps, Fieldset } from "../Fieldset/Fieldset"

export const CheckInput: React.FC<FieldProps> = (props) => (
  <Fieldset {...props}>
    <Field {...props} id={props.name} type="checkbox" />
  </Fieldset>
)
