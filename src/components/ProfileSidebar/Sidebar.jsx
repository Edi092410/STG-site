import React from "react";
import { Menu } from "antd";

export const Sidebar = () => {
  return (
    <div>
      <Menu
        onClick={(item) => {}}
        items={[
          {
            label: "Хүсэлтүүд",
            icon: "",
            key: "/",
          },
          {
            label: "Төлбөр",
            key: "/",
          },
        ]}
      />
    </div>
  );
};
