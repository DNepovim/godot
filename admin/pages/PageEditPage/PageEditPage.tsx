import { v4 as uuid } from 'uuid'
import * as yup from "yup"
import SaveOutlined from "@ant-design/icons/lib/icons/SaveOutlined"
import AppstoreAddOutlined from "@ant-design/icons/lib/icons/AppstoreAddOutlined"
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { PageHeader, Button, Form } from "antd"
import { Formik } from "formik"
import { blockDefs, blocks, BlocksFromValues } from "../../../blocks/blocks"
import { BlockTemplates } from "../../../blocks/blockTemplates"
import { getPage, updateBlock } from "../../../firebase/firebase"
import { SortableAdminBlockFields } from "../../adminFieldsDef"
import { enumToSchemaOptions } from "../../utils/enumToSchemaOptions"
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

export const PageEditPage = () => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const { slug } = useParams()
  const [blocks, setBlocks] = useState<BlocksFromValues>([])

  useEffect(() => {
    void (async () => {
      const page = (await getPage(slug)) ?? []
      setBlocks(page as BlocksFromValues)
    })()
  }, [])

  return (
    <Formik<BlocksFromValues>
      onSubmit={async (values: BlocksFromValues) =>
        values.forEach(async (block, index) => {
          await updateBlock("frontPage", index, block)
        })
      }
      validationSchema={() => yup.lazy((values: BlocksFromValues) => yup.array().of(yup.object().shape({
        template: yup.string().oneOf(enumToSchemaOptions(BlockTemplates)).required(),
        fields: yup.mixed().when("template", (template: BlockTemplates) => template ? blockDefs[template].schema : yup.mixed())
      })))}
      initialValues={blocks}
    >
      {props => (
        <PageHeader
          title="Hlavní stránka"
          breadcrumb={{routes:[{breadcrumbName: "Stránky", path: ""}, {breadcrumbName: "Hlavní stránka", path: ""}]}}
          extra={<Button type="primary" icon={<SaveOutlined />} onClick={async () => props.submitForm()} disabled={props.isSubmitting} loading={props.isSubmitting}>Uložit</Button>}
          footer={<Button icon={<AppstoreAddOutlined />} onClick={() => props.setValues([...props.values, {id: uuid()}])}>Přidat blok</Button>}
        >
          <Form>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={(event) => {
                const {active, over} = event

                if (!over || active.id === over.id) {
                  return
                }

                const items = props.values.map(v => v.id)
                const overIndex = items.indexOf(over.id)
                const activeIndex = items.indexOf(active.id)
                const newOrder = arrayMove(props.values, activeIndex, overIndex)

                props.setValues(newOrder)
              }}
            >
              <SortableContext
                items={props.values.map(v => v.id)}
                strategy={verticalListSortingStrategy}
              >
                {props.values.map((block, index) => (
                  <SortableAdminBlockFields
                    key={block.id}
                    index={index}
                    id={block.id}
                    {...(block.template ? blockDefs[block.template] : {})}
                    onRemove={() => props.setValues(props.values.filter((_, i) => i !== index))}
                    onTemplateChange={template => props.setFieldValue(`[${index}].template`, template)}
                  />
                ))}
              </SortableContext>
            </DndContext>
          </Form>
        </PageHeader>
      )}
    </Formik>
  )
}