import { useState } from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const InputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "#000",
  } = props;

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearchProduct = () => {
    navigate(`/san-pham/tim-kiem-san-pham/${search}`);
  };

  return (
    <div style={{ display: "flex" }}>
      <Input
        placeholder={placeholder}
        bordered={bordered}
        size={size}
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
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
        onClick={handleSearchProduct}
        style={{
          backgroundColor: backgroundColorInput,
          borderRadius: "0px",
          height: "40px",
        }}
        icon={<SearchOutlined style={{ color: backgroundColorButton }} />}
      >
        <span style={{ color: backgroundColorButton }}>{textButton}</span>
      </Button>
    </div>
  );
};

export default InputSearch;
