import { Field } from "formik"
import React from "react"
import { FieldProps, Fieldset } from "../Fieldset/Fieldset"

export const TextInput: React.FC<FieldProps> = (props) => (
  <Fieldset {...props}>
    <Field {...props} />
  </Fieldset>
)
