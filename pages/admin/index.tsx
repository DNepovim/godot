import { NextPage } from "next"
import { Form, Formik } from "formik"
import {arrayMove, SortableContainer, SortableElement} from 'react-sortable-hoc'
import { getPage, updateBlock } from "../../firebase/firebase"
import { AdminBlockFields, AdminBlockFieldsProps } from "../../admin/adminFieldsDef"
import { blockDefs, BlocksDefs } from "../../blocks/blocks"

type Blocks = Partial<BlocksDefs>[]

const Container = SortableContainer(({children}) => <div>{children}</div>)

const SortableItem = SortableElement<AdminBlockFieldsProps & { order: number }>(props => <AdminBlockFields index={props.order} {...props} />)

const Admin: NextPage<Props> = ({blocks}) => (
  <Formik<Blocks>
    onSubmit={(values: Blocks) => values.forEach((block, index) => {
      updateBlock("frontPage", index, block)
    })}
    initialValues={blocks}
  >
    {props => (
      <Form>
        <Container
          onSortEnd={({oldIndex, newIndex}) => {
            props.setValues(arrayMove(props.values, oldIndex, newIndex))
          }}>
          {props.values.map((block, index) => (
            <SortableItem
              key={index}
              index={index}
              order={index}
              {...(block.template ? blockDefs[block.template] : {})}
              onRemove={() => props.setValues(props.values.filter((_, i) => i !== index))}
            />
          ))}
        </Container>
        <button
          type="button"
          onClick={() => props.setValues([...props.values, {}])}
        >Přidat blok</button>
        <button type="submit" >Uložit</button>
      </Form>
    )}
  </Formik>
)

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
