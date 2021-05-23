import "./App.css";
import React, { useState } from "react";
import "antd/dist/antd.css";
import Grid1 from "./components/Grid1";
import { Layout, Menu, Row, Col, Divider, Tabs } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import Paginationa from "./components/Paginationa";
import Grid2 from "./components/Grid2";
import Gridindex from "./components/Gridindex";
import ParallaxAjs from "./components/ParallaxAjs";
import Grid3 from "./components/Grid3";
import Grid4 from "./components/Grid4";
import Grid5 from "./components/Grid5";
import Grid6 from "./components/Grid6";

const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = (e) => {
    console.log("click ", e);
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <ParallaxAjs></ParallaxAjs>
            <Gridindex></Gridindex>
            <ParallaxAjs></ParallaxAjs>
            <Grid1></Grid1>
            <div className="block">
              <div className="center">
                <Paginationa className="center"></Paginationa>
              </div>
            </div>
            <Grid2></Grid2>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Tab 1" key="1">
                <Grid3></Grid3>
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                <Grid4></Grid4>
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                <Grid5></Grid5>
              </TabPane>
              <TabPane tab="Tab 4" key="4">
                <Grid6></Grid6>
              </TabPane>
            </Tabs>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
