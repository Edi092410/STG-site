import React from "react";
import { Menu } from "antd";
import { WalletIcon } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="w-1/5">
      <Menu>
        onClick={(item) => {}}
        items=
        {[
          {
            label: "Хүсэлтүүд",
            key: "/",
          },
          {
            label: "Төлбөр",
            key: "/",
          },
        ]}
      </Menu>
    </div>
  );
};
