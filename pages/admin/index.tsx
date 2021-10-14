import { NextPage } from "next"
import { Form, Formik } from "formik"
import { getPage, updateBlock } from "../../firebase/firebase"
import { AdminBlockFields } from "../../admin/adminFieldsDef"
import { blockDefs, BlocksDefs } from "../../blocks/blocks"

type Blocks = BlocksDefs[]

const Admin: NextPage<Props> = ({blocks}) => (
  <Formik<Blocks>
    onSubmit={(values: Blocks) => values.forEach((block, index) => {
      updateBlock("frontPage", index, block)
    })}
    initialValues={blocks}
  >
    {props => (
      <Form>
        {props.values.map((block, index) => <AdminBlockFields key={index} index={index} {...blockDefs[block.template]} />)}
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