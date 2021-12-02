import { Button, PageHeader, Spin, Table } from "antd"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getPages } from "../../../firebase/firebase"
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined"

export const PagesListPage = () => {
  const [page, setPage] = useState()
  useEffect(() => {
    void (async () => {
      const data = await getPages()
      setPage(data)
    })()
  }, [])

  if (!page) {
    return <Spin />
  }

  const serializedData = Object.entries(page).map(([key, data]) => ({ key, title: data.title }))

  return (
    <PageHeader
      title="Stránky"
      breadcrumb={{routes:[{breadcrumbName: "Stránky", path: ""}]}}
    >
      <Table
        dataSource={serializedData}
        columns={[
          {
            title: "Název",
            dataIndex: "title",
            key: "title"
          },
          {
            title: "Naposledy upraveno",
            render: record => `${record.lastEditedBy} (${record.lastEditedTime})`,
            key: "lastEdited"
          },
          {
            render: record => <Button icon={<EditOutlined />}><Link to={`/admin/stranky/${record.key}`}>Upravit</Link></Button>,
            key: "action"
          }
        ]} />
    </PageHeader>
  )
}