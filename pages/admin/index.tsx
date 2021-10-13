import React, { useEffect } from "react"
import { NextPage } from "next"
import { Form, Formik } from "formik"
import { CoverBlock, coverDef } from "../../blocks/Cover/coverDef"
import { getPage, updateBlock } from "../../firebase/firebase"
import { CoverProps } from "../../blocks/Cover/Cover"
import { AdminBlockFields, BlockDef } from "../../admin/adminFieldsDef"
import { Page } from "../../data"

const Admin: NextPage<Props> = ({ page }) => (
  <Formik<CoverProps>
    onSubmit={(values: CoverProps) => updateBlock("frontPage", 0, values)}
    initialValues={(page.blocks[0] as CoverBlock).fields}
  >
    <Form>
      <AdminBlockFields {...coverDef} />
      <button type="submit" >Uložit</button>
    </Form>
  </Formik>
)

interface Props {
  page: Page
}

export const getStaticProps = async () => ({
  props: {
    page: await getPage("frontPage") ?? []
  }
})

export default Admin