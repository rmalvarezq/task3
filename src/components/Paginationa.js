import React from "react";
import { Pagination } from "antd";

export default function Paginationa() {
  return (
    <>
      <Pagination
        total={85}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `Total ${total} items`}
      />
    </>
  );
}
