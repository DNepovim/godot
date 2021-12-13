import { v4 as uuid } from 'uuid'
import * as yup from "yup"
import SaveOutlined from "@ant-design/icons/lib/icons/SaveOutlined"
import AppstoreAddOutlined from "@ant-design/icons/lib/icons/AppstoreAddOutlined"
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { PageHeader, Button, Form, Spin, message } from "antd"
import { Formik } from "formik"
import { blockDefs } from "../../../blocks/blocks"
import { BlockTemplates } from "../../../blocks/blockTemplates"
import { getPage, updatePage } from "../../../firebase/firebase"
import { SortableAdminBlockFields } from "../../adminFieldsDef"
import { enumToSchemaOptions } from "../../utils/enumToSchemaOptions"
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { Page } from '../../../data'
import { User } from '@firebase/auth'
import { Centered } from '../../components/Centered/Centered'

export const PageEditPage = ({ user }: {user: User}) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const { slug } = useParams()
  const [page, setPage] = useState<Page>()

  if (slug) {
    message.error({
      message: "Nepodařilo se načíst stránku.",
      description: "Slug není definován",
    })
  }

  useEffect(() => {
    void (async () => {
      const pageData = await getPage(slug as string)
      if (!pageData) {
        message.error({ // TODO message not working
          message: "Nepodařilo se načíst stránku.",
          description: "Server nevrátil žádná data.",
        })
      }
      setPage(pageData)
    })()
  }, [slug])

  if (!page) {
    return <Centered><Spin /></Centered>
  }

  return (
    <Formik<Page>
      onSubmit={async (values: Page) => {
        const today = new Date()
        const pageValues: Page = {
          title: page.title,
          lastEditedBy: user.email ?? "",
          lastEditedTime: today.toLocaleString("cs-CZ"),
          blocks: values.blocks
        }
        await updatePage(slug as string, pageValues)
      }}
      validationSchema={() => yup.lazy(() => yup.array().of(yup.object().shape({
        template: yup.string().oneOf(enumToSchemaOptions(BlockTemplates)).required(),
        fields: yup.mixed().when("template", (template: BlockTemplates) => template ? blockDefs[template].schema : yup.mixed())
      })))}
      initialValues={page}
    >
      {props => (
        <PageHeader
          title={page.title}
          subTitle={`${props.values.lastEditedTime} uživatelem ${props.values.lastEditedBy}`}
          breadcrumb={{routes:[{breadcrumbName: "Stránky", path: ""}, {breadcrumbName: "Hlavní stránka", path: ""}]}}
          extra={<Button type="primary" icon={<SaveOutlined />} onClick={async () => props.submitForm()} disabled={props.isSubmitting} loading={props.isSubmitting}>Uložit</Button>}
          footer={<Button icon={<AppstoreAddOutlined />} onClick={() => props.setFieldValue("blocks", [...props.values.blocks, {id: uuid()}])}>Přidat blok</Button>}
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

                const items = props.values.blocks.map(v => v.id)
                const overIndex = items.indexOf(over.id)
                const activeIndex = items.indexOf(active.id)
                const newOrder = arrayMove(props.values.blocks, activeIndex, overIndex)

                props.setFieldValue("blocks", newOrder)
              }}
            >
              <SortableContext
                items={props.values.blocks.map(v => v.id)}
                strategy={verticalListSortingStrategy}
              >
                {props.values.blocks.map((block, index) => (
                  <SortableAdminBlockFields
                    key={block.id}
                    index={index}
                    id={block.id}
                    {...(block.template ? blockDefs[block.template] : {})}
                    onRemove={() => props.setFieldValue("blocks", props.values.blocks.filter((_, i) => i !== index))}
                    onTemplateChange={template => props.setFieldValue(`blocks[${index}].template`, template)}
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