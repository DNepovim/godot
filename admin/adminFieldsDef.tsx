import { FieldArray, useField } from "formik"
import React from "react"
import * as yup from 'yup'
import { blockDefs } from "../blocks/blocks"
import { BlockTemplates } from "../blocks/blockTemplates"
import { FieldProps } from "../components/Fieldset/Fieldset"
import { SelectInput } from "../components/SelectInput/SelectInput"
import { Unarray } from "./utilityTypes"

export interface BlockDef<T> {
  title: string
  template: BlockTemplates
  adminFields: AdminFields<T>
  component: React.FC<T>
}

type AdminFields<T> = {
  [K in keyof T]: AdminField<Unarray<T[K]>>
}

type AdminField<T> = GroupDef<T> | FieldDef<T>

interface GeneralDef {
  label: string
  clonable?: true
}

interface FieldDef<T> extends GeneralDef {
  input: InputDef<T>
}

interface GroupDef<T> extends GeneralDef {
  fields: AdminFields<T>
}

interface InputDef<T> {
  component: React.FC<FieldProps>
  schema: yup.SchemaOf<T>
}

export const isGroupField = <T extends {}>(component: AdminField<T>): component is GroupDef<T> => "fields" in component

export const AdminBlockFields: React.FC<Partial<BlockDef<any>> & { index: number, onRemove: (index: number) => void }> = ({index, title, adminFields, onRemove}) => (
  <div>
    <SelectInput
      name={`[${index}].template`}
      label="Šablona"
      options={Object.values(blockDefs).map(block => ({ label: block.title, value: block.template }))}
    />
    {adminFields && <AdminFieldset path={`[${index}].fields`} legend={title} fields={adminFields} />}
    <button type="button" onClick={() => onRemove(index)}>Odebrat blok</button>
    <hr />
  </div>)

interface AdminFieldsetProps<T> {
  fields: AdminFields<T>
  legend?: string
  path?: string
  clonable?: true
}

const AdminFieldset: React.FC<AdminFieldsetProps<any>> = ({legend, fields, path}) => {
  return (
    <fieldset>
      {legend && <legend>{legend}</legend>}
      {Object.entries(fields).map(([name, field]) => {
        if (field.clonable) {
          if (isGroupField(field)) {
            return <ClonableFields name={getPath(name, path)} fields={field.fields} />
          }
          return <ClonableFields name={getPath(name, path)} component={field.input.component} />
        }
        if (isGroupField(field)) {
          return <AdminFieldset legend={field.label} fields={field.fields} path={getPath(name, path)} />
        }
        return React.createElement(field.input.component, { key: getPath(name, path), name: getPath(name, path), label: field.label })
      })}
    </fieldset>
  )
}

const getPath = (name: string, path?: string): string => path ? `${path}[${name}]` : name

const ClonableFields: React.FC<{name: string, fields?: AdminFields<any>, component?: React.FC<FieldProps>}> = ({name, fields, component}) => {
  const [field] = useField(name)
  return (
    <FieldArray
      name={name}
      render={helpers => (
        <>
          {(Array.isArray(field.value) ? field.value : []).map((_, index) => (
            <>
              {component && React.createElement(component, { key: `${name}[${index}]`, name: `${name}[${index}]`})}
              {fields && <AdminFieldset key={`${name}[${index}]`} fields={fields} path={`${name}[${index}]`} />}
              <button
                type="button"
                onClick={() => helpers.remove(index)}
              >Odebrat</button>
            </>
          ))}
          <button
           type="button"
           onClick={() => helpers.push(undefined)}
          >Přidat</button>
        </>
      )}
    />
  )
}