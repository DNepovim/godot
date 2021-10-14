import { Field } from "formik"
import React from "react"
import { FieldProps, Fieldset } from "../Fieldset/Fieldset"

export const NumberInput: React.FC<FieldProps> = (props) => (
  <Fieldset {...props}>
    <Field {...props} type="number" />
  </Fieldset>
)
