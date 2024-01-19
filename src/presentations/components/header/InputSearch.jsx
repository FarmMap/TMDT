import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const InputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "#000",
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <Input
        placeholder={placeholder}
        bordered={bordered}
        size={size}
        style={{
          backgroundColor: backgroundColorInput,
          borderRadius: "0px",
          height: "40px",
          borderRight: "none",
        }}
      />
      <Button
        size="size"
        bordered={bordered}
        style={{
          backgroundColor: backgroundColorInput,
          borderRadius: "0px",
          height: "40px",
          marginTop: "4px"
        }}
        icon={<SearchOutlined style={{ color: backgroundColorButton }} />}
      >
        <span style={{ color: backgroundColorButton }}>{textButton}</span>
      </Button>
    </div>
  );
};

export default InputSearch;
