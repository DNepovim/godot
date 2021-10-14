import * as yup from 'yup'
import { FieldProps } from "formik"
import { CheckInput } from '../components/CheckInput/CheckInput'
import { NumberInput } from '../components/NumberInput/NumberInput'
import { TextInput } from '../components/TextInput/TextInput'


export const adminComponentsDef = {
  text: {
    component: (props: FieldProps) => <TextInput {...props} />,
    schema: yup.string().required()
  },
  number: {
    component: (props: FieldProps) => <NumberInput {...props} />,
    schema: yup.number().required()
  },
  checkkbox: {
    component: (props: FieldProps) => <CheckInput {...props} />,
    schema: yup.bool()
  }
}
