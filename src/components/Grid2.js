import React from "react";
import { Row, Col, Steps } from "antd";
import Cards from "./Cards";

import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import Register from "./Register";
import Login from "./Login";
import CalendarA from "./CalendarA";

const { Step } = Steps;
export default function Grid2() {
  return (
    <>
      <Steps>
        <Step status="finish" title="Login" icon={<UserOutlined />} />
        <Step
          status="finish"
          title="Verification"
          icon={<SolutionOutlined />}
        />
        <Step status="process" title="Pay" icon={<LoadingOutlined />} />
        <Step status="wait" title="Done" icon={<SmileOutlined />} />
      </Steps>
      <div className="block">
        <div className="container-fluid">
          <Row glutter={[16, 16]}>
            <Col
              xs={{ span: 24, offset: 1 }}
              sm={{ span: 12, offset: 5 }}
              md={{ span: 8, offset: 3 }}
            >
              <Login></Login>
              <CalendarA></CalendarA>
            </Col>
            <Col
              xs={{ span: 24, offset: 1 }}
              sm={{ span: 12, offset: 5 }}
              md={{ span: 8, offset: 3 }}
            >
              <Register></Register>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
