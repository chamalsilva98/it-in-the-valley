import LoadingButton from "@mui/lab/LoadingButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
import Title from "./Title";

export default function ReqAdvert() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const addAdvert = async () => {
    setLoading(true);
    try {
      await axios.post("/api/advert", {
        title,
        description,
      });
      setTitle("");
      setDescription("");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Title>Request Advert</Title>
      <Stack spacing={2}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          multiline
          minRows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <LoadingButton
          loading={loading}
          variant="contained"
          onClick={addAdvert}
        >
          Add
        </LoadingButton>
      </Stack>
    </Paper>
  );
}
