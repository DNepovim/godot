/** @jsxImportSource @emotion/react */
import { NextPage } from "next"
import 'antd/dist/antd.css'
import { Avatar, Button, Layout, Menu, Result } from 'antd'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, logout, login } from "../firebase/auth"
import { Spinner } from './components/Spinner/Spinner'
import { Centered } from './components/Centered/Centered'
import { LogoutOutlined, LoginOutlined } from '@ant-design/icons'
import { Content, Header } from 'antd/lib/layout/layout'
import { css } from '@emotion/react'
import FileOutlined from "@ant-design/icons/lib/icons/FileOutlined"
import TeamOutlined from "@ant-design/icons/lib/icons/TeamOutlined"
import BarsOutlined from "@ant-design/icons/lib/icons/BarsOutlined"
import SettingOutlined from "@ant-design/icons/lib/icons/SettingOutlined"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { PageEditPage } from "./pages/PageEditPage/PageEditPage"
import { PagesListPage } from "./pages/PagesListPage/PagesListPage"
import { UsersListPage } from "./pages/UsersListPage/UsersListPage"
import { NavigationPage } from "./pages/NavigationPage/NavigationPage"
import { SettingsPage } from "./pages/SettingsPage/SettingsPage"
import { useEffect, useState } from "react"
import { IdTokenResult, ParsedToken } from "@firebase/auth"



export const Admin: NextPage = () => {
  const [user, loading] = useAuthState(auth)
  const [userClaims, setUserClaims] = useState<ParsedToken>()

  useEffect(() => {
    if (user) {
      user.getIdTokenResult(true).then((result: IdTokenResult) => setUserClaims(result.claims))
    }
  }, [user])

  if (loading) {
    return (
      <Spinner />
    )
  }

  if (!user) {
    return <Centered><Button onClick={login} icon={<LoginOutlined />}>Přihlásit se</Button></Centered>
  }


  if (!(userClaims && ["admin", "editor"].includes(userClaims.role as string))) {
    return (
      <Centered>
        Nemáte oprávnění
        <Button onClick={login} icon={<LogoutOutlined />}>Odhlásit se</Button>
      </Centered>
    )

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
              <Menu.Item icon={<FileOutlined />} key="pages"><Link to="/admin/stranky/">Stránky</Link></Menu.Item>
              <Menu.Item disabled={true} icon={<BarsOutlined />} key="navigation"><Link to="/admin/navigace">Navigace</Link></Menu.Item>
              {userClaims.role === "admin" && <Menu.Item icon={<TeamOutlined />} key="users"><Link to="/admin/uzivatele">Uživatelé</Link></Menu.Item>}
              {userClaims.role === "admin" && <Menu.Item disabled={true} icon={<SettingOutlined />} key="settings"><Link to="/admin/nastaveni">Nastavení</Link></Menu.Item>}
            </Menu>
          </Layout.Sider>
          <Layout>
            <Content>
                <Routes>
                  <Route path="/admin/stranky" element={<PagesListPage/>} />
                  <Route path="/admin/stranky/:slug" element={<PageEditPage user={user} />} />
                  <Route path="/admin/navigace" element={<NavigationPage />} />
                  <Route path="/admin/uzivatele" element={<UsersListPage />} />
                  <Route path="/admin/nastaveni" element={<SettingsPage />} />
                </Routes>
            </Content>
          </Layout>
        </BrowserRouter>
      </Layout>
    </Layout>
  )
}
