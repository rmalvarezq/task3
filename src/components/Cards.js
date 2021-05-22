import React from "react";
import { Card, Avatar, Image } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Affix1 from "./Affix1";
import Paginationa from "./Paginationa";
const { Meta } = Card;
export default function Cards() {
  return (
    <>
      <Card
        hoverable
        cover={
          <Image src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="Lorem ipsum dolor sit "
        />
      </Card>
    </>
  );
}
