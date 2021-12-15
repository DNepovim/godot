import { Button, PageHeader, Spin, Table } from "antd"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getPages } from "../../../firebase/firebase"
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined"
import { Page } from "../../../data"

export const PagesListPage = () => {
  const [pages, setPages] = useState<Page>()
  useEffect(() => {
    void (async () => {
      const data = await getPages()
      setPages(data)
    })()
  }, [])

  return (
    <PageHeader
      title="Stránky"
      breadcrumb={{routes:[{breadcrumbName: "Stránky", path: ""}]}}
    >
      <Table
        loading={!pages}
        dataSource={pages ? Object.entries(pages).map(([slug, data]) => ({ slug, ...data })) : []}
        columns={[
          {
            title: "Název",
            dataIndex: "title",
            key: "title",
          },
          {
            title: "Naposledy upraveno",
            render: record => `${record.lastEditedBy} (${record.lastEditedTime})`,
            key: "lastEdited",
          },
          {
            render: record => <Link to={`/admin/stranky/${record.slug}`}><Button icon={<EditOutlined />}>Upravit</Button></Link>,
            key: "action",
            align: "right",
          }
        ]}
        pagination={{
          hideOnSinglePage: true
        }}
      />
    </PageHeader>
  )
}