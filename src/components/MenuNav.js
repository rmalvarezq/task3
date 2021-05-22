import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  DownOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const menu = (
  <Menu theme="dark">
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);
export default function MenuNav() {
  const [collapsed, setCollapsed] = useState(false);
  const handleClick = (e) => {
    //   console.log("click ", e);
    setCollapsed(true);
  };
  const { current } = setCollapsed;
  return (
    <>
      <Menu
        theme="dark"
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title="Navigation Three - Submenu"
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
          <Menu.Item key="alipay">
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Navigation Four - Link
            </a>
          </Menu.Item>
          <Menu.Item key="alipay">
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                Log In <DownOutlined />
              </a>
            </Dropdown>
          </Menu.Item>
      </Menu>
    </>
  );
}
