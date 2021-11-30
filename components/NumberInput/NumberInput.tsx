import { InputNumber } from "antd"
import { useField } from "formik"
import React from "react"
import { FieldProps, Fieldset } from "../Fieldset/Fieldset"

export const NumberInput: React.FC<FieldProps> = (props) => {
  const [field] = useField(props.name)

  return (
  <Fieldset {...props}>
    <InputNumber {...field} />
  </Fieldset>
  )
}
