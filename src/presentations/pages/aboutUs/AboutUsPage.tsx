import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import DefaultLayOut from "../../components/defaultLayOut/DefaultLayOut";
import TextEditTorPage from "../../components/textEditTor/TextEditTorPage";
import "react-quill/dist/quill.snow.css";
import EditIcon from "@mui/icons-material/Edit";

const AboutUsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <DefaultLayOut>
      <Grid padding={"1.2rem"} style={{ background: "#fff" }}>
        <Grid container justifyContent={"flex-end"}>
          {!isOpen && (
            <Button
              style={{ boxShadow: "none" }}
              variant="outlined"
              type="submit"
              onClick={() => setIsOpen(true)}
            >
              <EditIcon />
            </Button>
          )}
        </Grid>
        {isOpen && (
          <TextEditTorPage
            onClose={() => {
              setIsOpen(false);
            }}
          />
        )}
      </Grid>
    </DefaultLayOut>
  );
};

export default AboutUsPage;
