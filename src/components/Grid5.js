import React, { useState } from "react";
import {
  Alert,
  Drawer,
  Button,
  notification,
  Divider,
  Popconfirm,
  message,
  Progress,
  Result,
} from "antd";
function confirm(e) {
  console.log(e);
  message.success("Click on Yes");
}

function cancel(e) {
  console.log(e);
  message.error("Click on No");
}

export default function Grid5() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const openNotification = () => {
    notification.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };
  return (
    <>
      <Divider>
        <Button type="primary" onClick={openNotification}>
          Open the notification box
        </Button>
      </Divider>
      <Alert message="Success Text" type="success" />
      <Divider>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </Divider>
      <Divider></Divider>
      <Popconfirm
        title="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <a href="#">Delete</a>
      </Popconfirm>
      <Divider></Divider>{" "}
      <Progress
        type="circle"
        percent={75}
        format={(percent) => `${percent} Days`}
      />
      <Progress type="circle" percent={100} format={() => "Done"} />
      <Divider></Divider>
      <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button type="primary" key="console">
            Go Console
          </Button>,
          <Button key="buy">Buy Again</Button>,
        ]}
      />
      ,
    </>
  );
}
