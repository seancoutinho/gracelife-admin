import React from "react";
import { Avatar as AntdAvatar } from "antd";
import { AvatarProps } from "antd/lib";
import { getNameInitials } from "@/utilities";

type Props = AvatarProps & {
  name?: string;
};
const CustomAvatar = ({ name, style, ...rest }: Props) => {
  return (
    <AntdAvatar
      alt="Sean Coutinho"
      size="small"
      style={{
        backgroundColor: "#0017c5",
        display: "flex",
        alignItems: "center",
        border: "none",
        ...style,
      }}
      {...rest}
      >
      {getNameInitials(name || "")}
    </AntdAvatar>
  );
};

export default CustomAvatar;
