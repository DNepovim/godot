import { NextPage } from "next"
import { FieldArray, Form, Formik } from "formik"
import { getPage, updateBlock } from "../../firebase/firebase"
import { AdminBlockFields } from "../../admin/adminFieldsDef"
import { blockDefs, BlocksDefs } from "../../blocks/blocks"

type Blocks = Partial<BlocksDefs>[]

const Admin: NextPage<Props> = ({blocks}) => (
  <Formik<Blocks>
    onSubmit={(values: Blocks) => values.forEach((block, index) => {
      updateBlock("frontPage", index, block)
    })}
    initialValues={blocks}
  >
    {props => (
      <Form>
        {props.values.map((block, index) => <AdminBlockFields key={index} index={index} {...(block.template ? blockDefs[block.template] : {})} onRemove={() => props.setValues(props.values.filter((_, i) => i !== index))} />)}
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