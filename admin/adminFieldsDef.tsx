import React from "react"
import * as yup from 'yup'
import { CheckInput } from "../components/CheckInput/CheckInput"
import { FieldProps } from "../components/Fieldset/Fieldset"
import { TextInput } from "../components/TextInput/TextInput"

export interface BlockDef<T> {
  id: string
  title: string
  adminFields: AdminFields<T>
  component: React.FC<T>
}

type AdminFields<T> = {
  [K in keyof T]: AdminField<T[K]>
}

type AdminField<T> = GroupDef<T> | FieldDef<T>

interface FieldDef<T> {
  label: string
  input: InputDef<T>
}

interface GroupDef<T> {
  label: string
  fields: AdminFields<T>
}

interface InputDef<T> {
  component: React.FC<FieldProps>
  schema: yup.SchemaOf<T>
}

export const adminComponentsDef = {
  text: {
    component: (props: FieldProps) => <TextInput {...props} />,
    schema: yup.string().required()
  },
  checkkbox: {
    component: (props: FieldProps) => <CheckInput {...props} />,
    schema: yup.bool()
  }
}

export const isGroupField = <T extends {}>(component: AdminField<T>): component is GroupDef<T> => "fields" in component

export const AdminBlockFields: React.FC<BlockDef<any>> = ({title, adminFields}) => <AdminFieldset legend={title} fields={adminFields} />

interface AdminFieldsetProps<T> {
  legend: string
  fields: AdminFields<T>
}

const AdminFieldset: React.FC<AdminFieldsetProps<any>> = ({legend, fields}) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {Object.entries(fields).map(([name, field]) => isGroupField(field)
        ? <AdminFieldset legend={field.label} fields={field.fields} />
        : React.createElement(field.input.component, { key: name, name, label: field.label })
      )}
    </fieldset>
  )
}