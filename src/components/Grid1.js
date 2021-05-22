import React from "react";
import { Row, Col, Divider, Space, Typography, Card } from "antd";
import Cards from "./Cards";
export default function Grid1() {
  return (
    <>
      <div className="block">
        <div className="container-fluid">
          <Row glutter={[16, 16]}>
            <Col
              xs={{ span: 24, offset: 1 }}
              sm={{ span: 12, offset: 5 }}
              md={{ span: 8, offset: 3 }}
            >
              <Cards></Cards>
            </Col>
            <Col
              xs={{ span: 24, offset: 1 }}
              sm={{ span: 12, offset: 5 }}
              md={{ span: 8, offset: 3 }}
            >
              <Cards></Cards>
            </Col>
           
          </Row>
        </div>
      </div>
    </>
  );
}
