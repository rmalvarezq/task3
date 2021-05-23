import React from "react";
import { Calendar, Badge } from "antd";
let listData;

export default function CalendarA() {
  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: "warning", content: "warning " },
        ];
        break;
      case 10:
        listData = [
          { type: "warning", content: "event." },
        ];
        break;
      case 15:
        listData = [
          { type: "success", content: " event" },
          { type: "error", content: "error event 4." },
        ];
        break;
      default:
    }
    return listData || [];
  }
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }
  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  return (
    <div>
      <Calendar
        fullscreen={false}
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </div>
  );
}
