import { Select } from "antd"
import { FieldProps, Fieldset } from "../Fieldset/Fieldset"

export interface SelectInputProps extends FieldProps<string[]> {
  options: {
    label: string
    value: string
  }[]
}

export const SelectInput: React.FC<SelectInputProps> = (props) => (
  <Fieldset<string[]> {...props}>
    {renderProps => (
      <Select {...renderProps}>
        {props.options.map(option => <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>)}
      </Select>
    )}
  </Fieldset>
)
