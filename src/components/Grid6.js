import React, { useState } from "react";
import { Skeleton, Spin, Space, Divider, Anchor } from "antd";
import { Badge, Button, Switch } from "antd";
import {
  MinusOutlined,
  PlusOutlined,
  QuestionOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const { Link } = Anchor;
const ButtonGroup = Button.Group;
export default function Grid6() {
  const [collapsed, setCollapsed] = useState(false);

  const increase = () => {
    const count = collapsed + 1;
    setCollapsed({ count });
  };

  const decline = () => {
    let count = collapsed - 1;
    if (count < 0) {
      count = 0;
    }
    setCollapsed({ count });
  };
  const random = () => {
    const count = Math.floor(Math.random() * 100);
    setCollapsed({ count });
  };

  const onChange = (show) => {
    setCollapsed({ show });
  };
  return (
    <div>
      <Skeleton />
      <Divider></Divider>
      <Space size="middle">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </Space>
      <Divider></Divider>
      <Anchor>
        <Link href="#components-anchor-demo-basic" title="Basic demo" />
        <Link href="#components-anchor-demo-static" title="Static demo" />
        <Link href="#API" title="API">
          <Link href="#Anchor-Props" title="Anchor Props" />
          <Link href="#Link-Props" title="Link Props" />
        </Link>
      </Anchor>
      <Divider>
        <Badge count={5}>
          <a href="#" className="head-example" />
        </Badge>
        <Badge count={0} showZero>
          <a href="#" className="head-example" />
        </Badge>
        <Badge count={<ClockCircleOutlined style={{ color: "#f5222d" }} />}>
          <a href="#" className="head-example" />
        </Badge>
      </Divider>
      <Divider></Divider>,{" "}
      <div>
        <div>
          <Badge count={setCollapsed.count}>
            <a href="#" className="head-example" />
          </Badge>
          <ButtonGroup>
            <Button onClick={decline}>
              <MinusOutlined />
            </Button>
            <Button onClick={increase}>
              <PlusOutlined />
            </Button>
            <Button onClick={random}>
              <QuestionOutlined />
            </Button>
          </ButtonGroup>
        </div>
        <div style={{ marginTop: 10 }}>
          <Badge dot={setCollapsed.show}>
            <a href="#" className="head-example" />
          </Badge>
          <Switch onChange={onChange} checked={setCollapsed.show} />
        </div>
      </div>
    </div>
  );
}
