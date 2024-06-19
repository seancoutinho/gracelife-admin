import React from "react";
import CurrentUser from "./current-user";
import { Layout, Space } from "antd";

const Header = () => {

  const headerStyles: React.CSSProperties = {
    backgroundColor: "#46c500",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0px 24px",
    position: "sticky",
    top: 0,
    zIndex: 999,
  };
  return (
    <Layout.Header style={headerStyles}>
      <Space align='center' size='middle'>
        <CurrentUser />
      </Space>
    </Layout.Header>
  );
};

export default Header;
