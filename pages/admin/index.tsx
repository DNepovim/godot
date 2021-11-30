/** @jsxImportSource @emotion/react */
import { useAuthState } from 'react-firebase-hooks/auth'
import { NextPage } from "next"
import { Form, Formik } from "formik"
import { getPage, updateBlock } from "../../firebase/firebase"
import { SortableAdminBlockFields } from "../../admin/adminFieldsDef"
import { blockDefs, BlocksDefs } from "../../blocks/blocks"
import { auth, logout, login } from "../../firebase/auth"
import { Spinner } from '../../admin/components/Spinner/Spinner'
import { Centered } from '../../admin/components/Centered/Centered'
import { Avatar, Button, Collapse, Layout, message, PageHeader, Space } from 'antd'
import 'antd/dist/antd.css'
import { AppstoreAddOutlined, SaveOutlined, LogoutOutlined, LoginOutlined } from '@ant-design/icons'
import { Header } from 'antd/lib/layout/layout'
import { css } from '@emotion/react'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useSensors, useSensor, PointerSensor, KeyboardSensor, closestCenter, DndContext } from '@dnd-kit/core'
import { v4 as uuid } from 'uuid'
import { Overwrite } from 'utility-types/dist/mapped-types'
import { useState } from 'react'

type Blocks = Overwrite<Partial<BlocksDefs>, Pick<BlocksDefs, "id">>[]


const Admin: NextPage<Props> = ({blocks}) => {
  const [user, loading] = useAuthState(auth)
  const [adminBlocksOrder, setAdminBlocksOrder] = useState(blocks.map(b => b.id))
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  if (loading) {
    return (
      <Spinner />
    )
  }

  if (!user) {
    return <Centered><Button onClick={login} icon={<LoginOutlined />}>Přihlásit se</Button></Centered>
  }

  return (
    <Layout>
      <Header css={css`display: flex; align-items: center; justify-content: flex-end; `}>
          <Button onClick={logout} icon={<LogoutOutlined />} type="link">Odhlásit</Button>
          <Avatar alt={user.displayName} src={user.photoURL}/>
      </Header>
      <Formik<Blocks>
        onSubmit={async (values: Blocks) => {
          try {
            await values.forEach(async (block, index) => {
              await updateBlock("frontPage", index, block)
            })
          } catch (e) {
            console.error(e)
            message.error("Vyskytl se nějaký problém. Zkuste to znovu.")
          }
          message.success("Stránka byla uložena.")
        }}
        initialValues={blocks}
      >
        {props => (
          <PageHeader
            title="Hlavní stránka"
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

                  setAdminBlocksOrder(newOrder.map(b => b.id))
                  props.setValues(newOrder)
                }
              }
              >
                  <SortableContext
                    items={adminBlocksOrder}
                    strategy={verticalListSortingStrategy}
                  >
                <Collapse>
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
                </Collapse>
                  </SortableContext>
              </DndContext>
            </Form>
          </PageHeader>
        )}
      </Formik>
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
