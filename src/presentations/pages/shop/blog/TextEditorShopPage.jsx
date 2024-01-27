import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, {
  modules,
  formats,
} from "../../../components/textEditTor/EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { Input } from "antd";
//import "./TextEditor.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Grid } from "@mui/material";
import BlogType from "../../../../data/types/Blog/BlogType";
import useCreateBlog from "../../../../data/api/Blog/useCreateBlog";
import { toast } from "react-toastify";

function TextEditTorShopPage({ onClose }) {
  const [blog, setBlog] = useState({});

  const { isCreated, error, createBlog } = useCreateBlog({});

  const handleSubmitBlog = () => {
    createBlog({ blogs: blog });
  };

  useEffect(() => {
    if (isCreated) {
      toast.success("Thêm bài viết thành công");
      setBlog(false);
    } else if (error) {
      toast.error(error);
    }
  }, [isCreated, error]);

  return (
    <>
      <div className="App">
        <div className="container">
          <div className="row">
            <form className="update__forms">
              <div className="form-row">
                <div className="form-group col-md-12 editor">
                  <label htmlFor="title">Tiêu đề</label>
                  <Input
                    placeholder="Tiêu đề..."
                    id="title"
                    value={blog.title}
                    onChange={(e) => {
                      let newBlog = { ...blog };
                      newBlog.title = e.currentTarget.value;
                      setBlog(newBlog);
                    }}
                  />
                  <EditorToolbar toolbarId={"t1"} />
                  <ReactQuill
                    theme="snow"
                    value={blog.content}
                    onChange={(value) => {
                      let newBlog = { ...blog };
                      newBlog.content = value;
                      setBlog(newBlog);
                    }}
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
                    onClick={handleSubmitBlog}
                    type="button"
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
export default TextEditTorShopPage;
