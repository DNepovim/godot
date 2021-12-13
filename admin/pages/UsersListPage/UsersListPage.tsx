import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined"
import { Avatar, Button, Dropdown, Menu, notification, PageHeader, Popover, Spin, Table } from "antd"
import { ListUsersResult, UserRecord } from "firebase-admin/auth"
import { Link } from "react-router-dom"
import useSwr from "swr"

export const UsersListPage = () => {
  const { data } = useSwr<ListUsersResult>('/api/users/list', async url => {
    const result = await fetch(url)
    return result.json()
  })

  if (!data) {
    return <Spin />
  }

  const setRole = async (uid: string, role: string) => {
    await fetch("/api/users/setRole", { method: "POST", body: JSON.stringify({ uid, role })})
  }


  return (
    <PageHeader
      title="Uživatelé"
      breadcrumb={{routes:[{breadcrumbName: "Uživatelé", path: "/admin/uzivatele"}]}}
    >
      <Table<UserRecord>
        dataSource={data.users}
        columns={[
          {
            title: "Jméno",
            render: record => <><Avatar alt={record.displayName} src={record.photoURL}/>&nbsp;{record.displayName}</>,
            key: "name",
          },
          {
            title: "E-mail",
            key: "email",
            render: ({email}) => <Link to={`mailto:${email}`} target="_blank">{email}</Link>,
          },
          {
            title: "Role",
            key: "role",
            render: (_, record) => (
              <>
                {record.customClaims?.role}
                <Dropdown
                  trigger={["click"]}
                  overlay={
                    <Menu onClick={e => setRole(record.uid, e.key) }>
                      <Menu.Item key="admin">Admin</Menu.Item>
                      <Menu.Item key="editor">Editor</Menu.Item>
                      <Menu.Item key="guest">Host</Menu.Item>
                    </Menu>
                  }
                >
                  <EditOutlined />
                </Dropdown>
              </>
            )
          },
        ]} />
    </PageHeader>
  )
}