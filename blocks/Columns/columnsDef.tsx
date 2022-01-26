import * as yup from "yup"
import { BlockFields, withBlockSchema } from "../../components/Block/Block"
import { Columns } from "./Columns"
import { Block, BlockDef } from "../blocks"
import { TextInput } from "../../admin/components/Inputs/TextInput/TextInput"
import { enumToSchemaOptions } from "../../admin/utils/enumToSchemaOptions"
import { SelectInput } from "../../admin/components/Inputs/SelectInput/SelectInput"
import { TextAreaInput } from "../../admin/components/Inputs/TextAreaInput/TextAreaInput"
import { BlockTemplates } from "../blockTemplates"

export interface ColumnsBlock extends Block {
  template: BlockTemplates.Columns
  fields: ColumnsFields
}

export enum Icons {
  Lile = "lile",
  Scout = "scout",
  Hand = "hand",
}

export interface ColumnsFields extends BlockFields {
  title: string
  columns: {
    title: string
    text: string
    icon: Icons
  }[]
}

export const columnsSchema = withBlockSchema(
  yup.object().shape({
    title: yup.string().required("Musíš vyplnit nadpis").max(80),
    columns: yup.array().of(
      yup.object().shape({
        title: yup.string().required(),
        text: yup.string().required(),
        icon: yup.mixed().oneOf(enumToSchemaOptions(Icons)).required(),
      })
    ),
  })
)

export const columnsDef: BlockDef<ColumnsFields> = {
  title: "Sloupce",
  template: BlockTemplates.Columns,
  schema: columnsSchema,
  adminFields: {
    title: {
      label: "Nadpis",
      component: (props) => <TextInput {...props} />,
    },
    columns: {
      label: "Sloupce",
      clonable: true,
      fields: {
        title: {
          label: "Nadpis",
          component: (props) => <TextInput {...props} />,
        },
        text: {
          label: "Text",
          component: (props) => <TextAreaInput {...props} />,
        },
        icon: {
          label: "Ikona",
          component: (props) => (
            <SelectInput<Icons>
              {...props}
              options={[
                {
                  label: "Lilie",
                  value: Icons.Lile,
                },
                {
                  label: "Skaut",
                  value: Icons.Scout,
                },
                {
                  label: "Ruka",
                  value: Icons.Hand,
                },
              ]}
            />
          ),
        },
      },
    },
  },
  component: Columns,
}
