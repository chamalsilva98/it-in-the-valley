import LoadingButton from "@mui/lab/LoadingButton";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Title from "./Title";

export default function IssueMagazine() {
  const [value, setValue] = useState("");
  const [adverts, setAdverts] = useState([]);
  const [advert, setAdvert] = useState(null);
  const [stories, setStories] = useState([]);
  const [photographs, setPhotographs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAdverts = async () => {
    const response = await (await axios.get("/api/advert")).data;
    setAdverts(response);
  };

  useEffect(() => {
    getAdverts();
  }, []);

  const addMagazine = async () => {
    setLoading(true);
    try {
      await axios.post("/api/magazine", {
        document: value,
        advert: { id: advert.id },
      });
      setAdvert(null);
      setValue("");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

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
    <Stack spacing={2}>
      <Paper sx={{ p: 2 }}>
        <Title>Issue Magazine</Title>
        <Stack spacing={2}>
          <Autocomplete
            disablePortal
            options={adverts}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="Advert" />}
            value={advert}
            onChange={async (_event, newAdvert) => {
              setAdvert(newAdvert);
              const photographs = (
                await axios.get("/api/photograph/advert/" + newAdvert.id)
              ).data;
              setPhotographs(photographs);
              const stories = (
                await axios.get("/api/story/advert/" + newAdvert.id)
              ).data;
              setStories(stories);
            }}
          />
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
            placeholder="Combine document"
          />
          <LoadingButton
            loading={loading}
            variant="contained"
            onClick={addMagazine}
          >
            Add
          </LoadingButton>
        </Stack>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Title>Stories</Title>
        <Stack spacing={2}>
          {stories.map((story) => (
            <>
              <p>{story.story}</p>
              <Divider />
            </>
          ))}
        </Stack>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Title>Photographs</Title>
        <Stack spacing={2}>
          {photographs.map((photograph) => (
            <>
              <img src={photograph.photograph} />
              <Divider />
            </>
          ))}
        </Stack>
      </Paper>
    </Stack>
  );
}
