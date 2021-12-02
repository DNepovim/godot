import { PageHeader } from "antd"

export const UsersListPage = () => {

  return (
    <PageHeader
      title="Uživatelé"
      breadcrumb={{routes:[{breadcrumbName: "Uživatelé", path: "/admin/uzivatele"}]}}
    >
    </PageHeader>
  )
}