import { NextPage } from "next"
import { Form, Formik } from "formik"
import { CoverBlock, coverDef, CoverFields } from "../../blocks/Cover/coverDef"
import { getPage, updateBlock } from "../../firebase/firebase"
import { AdminBlockFields } from "../../admin/adminFieldsDef"
import { ColumnsBlock, columnsDef, ColumnsFields } from "../../blocks/Columns/columnsDef"

type Blocks = (CoverBlock | ColumnsBlock)[]

const blockDefs = {
  cover: coverDef,
  columns: columnsDef
}

const Admin: NextPage<Props> = ({blocks}) => (
  <Formik<Blocks>
    onSubmit={(values: Blocks) => values.forEach((block, index) => {
      updateBlock("frontPage", index, block)
    })}
    initialValues={blocks}
  >
    {props => (
      <Form>
        {blocks.map((block, index) => <AdminBlockFields key={index} index={index} {...blockDefs[block.template]} />)}
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

  const blocks = [
    (page.blocks[0] as CoverBlock),
    (page.blocks[3] as ColumnsBlock)
  ]

  return {
    props: {
      blocks
    }
  }
}

export default Admin