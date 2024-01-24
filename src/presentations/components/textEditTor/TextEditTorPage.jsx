import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
// import "./TextEditor.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Grid } from "@mui/material";

function TextEditTorPage({ onClose }) {
  let history = useNavigate();
  const [userInfo, setuserInfo] = useState({
    title: "",
    description: "",
    information: "",
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const ondescription = (value) => {
    setuserInfo({ ...userInfo, description: value });
  };
  const oninformation = (value) => {
    setuserInfo({ ...userInfo, information: value });
  };
  const [isError, setError] = useState(null);
  const addDetails = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      if (userInfo.description.length < 50) {
        setError(
          "Required, TextEditTorPage description minimum length 50 characters"
        );
        return;
      }
      axios
        .post(`http://localhost:8080/addArticle`, {
          title: userInfo.title,
          description: userInfo.description,
          information: userInfo.information,
        })
        .then((res) => {
          if (res.data.success === true) {
            history("/");
          }
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <div className="row">
            <form onSubmit={addDetails} className="update__forms">
              <div className="form-row">
                <div className="form-group col-md-12 editor">
                  <EditorToolbar toolbarId={"t1"} />
                  <ReactQuill
                    theme="snow"
                    value={userInfo.description}
                    onChange={ondescription}
                    placeholder={"Write something awesome..."}
                    modules={modules("t1")}
                    formats={formats}
                  />
                </div>
                <br />

                <br />
                <Grid textAlign={"right"}>
                  <Button
                    style={{ marginRight: "0.8rem" }}
                    variant="outlined"
                    type="submit"
                    onClick={() => onClose()}
                  >
                    {" "}
                    Quay lại
                  </Button>
                  <Button
                    style={{ boxShadow: "none" }}
                    variant="contained"
                    type="submit"
                  >
                    {" "}
                    Hoàn tất
                  </Button>
                </Grid>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default TextEditTorPage;
