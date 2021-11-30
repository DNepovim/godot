import { Checkbox } from "antd"
import { Field, useField } from "formik"
import React from "react"
import { FieldProps, Fieldset } from "../Fieldset/Fieldset"

export const CheckInput: React.FC<FieldProps> = (props) => {
  const [field] = useField(props.name)

  return (
  <Fieldset {...props}>
    <Checkbox {...field} />
  </Fieldset>
  )
}
