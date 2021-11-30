import { Input } from "antd"
import { useField } from "formik"
import React from "react"
import { FieldProps, Fieldset } from "../Fieldset/Fieldset"

export const TextAreaInput: React.FC<FieldProps> = (props) => {
  const [field] = useField(props.name)

  return (
  <Fieldset {...props}>
    <Input.TextArea {...field} rows={10} />
  </Fieldset>
  )
}
