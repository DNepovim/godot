import React from "react"
import { NextPage } from "next"
import { Form, Formik } from "formik"
import { coverDef } from "../../blocks/Cover/coverDef"
import { updateBlock } from "../../firebase/firebase"
import { CoverProps } from "../../blocks/Cover/Cover"
import { AdminBlockFields, BlockDef } from "../../admin/adminFieldsDef"

const Admin: NextPage = () => (
  <Formik<CoverProps>
    onSubmit={(values: CoverProps) => updateBlock("frontPage", 0, values)}
    initialValues={{
      title: "",
      subtitle: "",
      claim: "",
      button: {
        label: "",
        link: "",
        targetBlank: true
      }
    }}
  >
    <Form>
      <AdminBlockFields {...coverDef} />
      <button type="submit" >Uložit</button>
    </Form>
  </Formik>
)

export default Admin