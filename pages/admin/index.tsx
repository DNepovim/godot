/** @jsxImportSource @emotion/react */
import * as yup from "yup"
import { useAuthState } from 'react-firebase-hooks/auth'
import { NextPage } from "next"
import { Form, Formik } from "formik"
import { getPage, updateBlock } from "../../firebase/firebase"
import { SortableAdminBlockFields } from "../../admin/adminFieldsDef"
import { blockDefs, BlocksDefs } from "../../blocks/blocks"
import { auth, logout, login } from "../../firebase/auth"
import { Spinner } from '../../admin/components/Spinner/Spinner'
import { Centered } from '../../admin/components/Centered/Centered'
import { Avatar, Breadcrumb, Button, Layout, Menu, message, PageHeader } from 'antd'
import 'antd/dist/antd.css'
import { AppstoreAddOutlined, SaveOutlined, LogoutOutlined, LoginOutlined } from '@ant-design/icons'
import { Content, Header } from 'antd/lib/layout/layout'
import { css } from '@emotion/react'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useSensors, useSensor, PointerSensor, KeyboardSensor, closestCenter, DndContext } from '@dnd-kit/core'
import { v4 as uuid } from 'uuid'
import { Overwrite } from 'utility-types/dist/mapped-types'
import { enumToSchemaOptions } from "../../admin/utils/enumToSchemaOptions"
import { BlockTemplates } from "../../blocks/blockTemplates"
import Sider from "antd/lib/layout/Sider"
import React from "react"
import FileOutlined from "@ant-design/icons/lib/icons/FileOutlined"
import MenuOutlined from "@ant-design/icons/lib/icons/MenuOutlined"
import TeamOutlined from "@ant-design/icons/lib/icons/TeamOutlined"
import ToolOutlined from "@ant-design/icons/lib/icons/ToolOutlined"

type Blocks = Overwrite<Partial<BlocksDefs>, Pick<BlocksDefs, "id">>[]


const Admin: NextPage<Props> = ({blocks}) => {
  const [user, loading] = useAuthState(auth)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  if (loading) {
    return (
      <Spinner />
    )
  }

  if (!user) {
    return <Centered><Button onClick={login} icon={<LoginOutlined />}>Přihlásit se</Button></Centered>
  }

  return (
    <Layout css={css`min-height: 100vh`}>
      <Header css={css`display: flex; align-items: center; justify-content: flex-end; `} >
        <Button onClick={logout} icon={<LogoutOutlined />} type="link">Odhlásit</Button>
        <Avatar alt={user.displayName} src={user.photoURL}/>
      </Header>
      <Layout>
        <Layout.Sider width={200} css={css`background-color: white`}>
          <Menu>
            <Menu.Item icon={<FileOutlined />}>Stránky</Menu.Item>
            <Menu.Item icon={<MenuOutlined />}>Navigace</Menu.Item>
            <Menu.Item icon={<TeamOutlined />}>Uživatelé</Menu.Item>
            <Menu.Item icon={<ToolOutlined />}>Nastavení</Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout>
          <Content>
            <Formik<Blocks>
              onSubmit={async (values: Blocks) =>
                values.forEach(async (block, index) => {
                  await updateBlock("frontPage", index, block)
                })
              }
              validationSchema={() => yup.lazy((values: Blocks) => yup.array().of(yup.object().shape({
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
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

interface Props {
  blocks: Blocks
}

export const getStaticProps = async (): Promise<{ props: Props }> => {

  const page = await getPage("frontPage")

  if (!page) {
    return {
      props: {
        blocks: []
      }
    }
  }

  return {
    props: {
      blocks: page.blocks
    }
  }
}

export default Admin
