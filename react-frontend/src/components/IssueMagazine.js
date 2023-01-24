import LoadingButton from "@mui/lab/LoadingButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Title from "./Title";

export default function IssueMagazine() {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <Title>Issue Magazine</Title>
      <Stack spacing={2}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
          placeholder="Combine document"
        />
        <LoadingButton loading={false} variant="contained">
          Add
        </LoadingButton>
      </Stack>
    </Paper>
  );
}
