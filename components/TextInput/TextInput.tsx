import { Input } from "antd"
import { Field, useField } from "formik"
import React from "react"
import { FieldProps, Fieldset } from "../Fieldset/Fieldset"

export const TextInput: React.FC<FieldProps> = (props) => {
  const [field] = useField(props.name)

  return (
  <Fieldset {...props}>
    <Input {...field} />
  </Fieldset>
  )
}
