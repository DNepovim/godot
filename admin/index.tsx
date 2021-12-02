/** @jsxImportSource @emotion/react */
import { NextPage } from "next"
import 'antd/dist/antd.css'
import { Avatar, Button, Layout, Menu } from 'antd'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BlocksFromValues } from "../blocks/blocks"
import { auth, logout, login } from "../firebase/auth"
import { Spinner } from './components/Spinner/Spinner'
import { Centered } from './components/Centered/Centered'
import { LogoutOutlined, LoginOutlined } from '@ant-design/icons'
import { Content, Header } from 'antd/lib/layout/layout'
import { css } from '@emotion/react'
import FileOutlined from "@ant-design/icons/lib/icons/FileOutlined"
import MenuOutlined from "@ant-design/icons/lib/icons/MenuOutlined"
import TeamOutlined from "@ant-design/icons/lib/icons/TeamOutlined"
import ToolOutlined from "@ant-design/icons/lib/icons/ToolOutlined"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { PageEditPage } from "./pages/PageEditPage/PageEditPage"
import { PagesListPage } from "./pages/PagesListPage/PagesListPage"



export const Admin: NextPage = () => {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <Spinner />
    )
  }

  if (!user) {
    return <Centered><Button onClick={login} icon={<LoginOutlined />}>Přihlásit se</Button></Centered>
  }

  return (
    <Layout css={css`min-height: 100vh`}>
      <Header css={css`display: flex; align-items: center; justify-content: flex-end; `} >
        <Button onClick={logout} icon={<LogoutOutlined />} type="link">Odhlásit</Button>
        <Avatar alt={user.displayName} src={user.photoURL}/>
      </Header>
      <Layout>
        <BrowserRouter>
          <Layout.Sider width={200} css={css`background-color: white`}>
            <Menu>
              <Menu.Item icon={<FileOutlined />}><Link to="/admin/stranky/">Stránky</Link></Menu.Item>
              <Menu.Item icon={<MenuOutlined />}>Navigace</Menu.Item>
              <Menu.Item icon={<TeamOutlined />}>Uživatelé</Menu.Item>
              <Menu.Item icon={<ToolOutlined />}>Nastavení</Menu.Item>
            </Menu>
          </Layout.Sider>
          <Layout>
            <Content>
                <Routes>
                  <Route path="/admin/stranky" element={<PagesListPage/>} />
                  <Route path="/admin/stranky/:slug" element={<PageEditPage />} />
                </Routes>
            </Content>
          </Layout>
        </BrowserRouter>
      </Layout>
    </Layout>
  )
}
