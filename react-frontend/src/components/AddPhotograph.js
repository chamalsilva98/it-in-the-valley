import LoadingButton from "@mui/lab/LoadingButton";
import Autocomplete from "@mui/material/Autocomplete";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import Title from "./Title";

export default function AddPhotograph() {
  const [adverts, setAdverts] = useState([]);
  const [advert, setAdvert] = useState(null);
  const [photograph, setPhotograph] = useState("");
  const [loading, setLoading] = useState(false);

  const [user] = useContext(AuthContext);

  const getAdverts = async () => {
    const response = await (await axios.get("/api/advert")).data;
    setAdverts(response);
  };

  useEffect(() => {
    getAdverts();
  }, []);

  const addPhotograph = async () => {
    setLoading(true);
    try {
      await axios.post("/api/photograph", {
        advert: { id: advert.id },
        photograph,
        user: { id: user.id },
      });
      setAdvert(null);
      setPhotograph("");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Title>Add Photograph</Title>
      <Stack spacing={2}>
        <Autocomplete
          disablePortal
          options={adverts}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label="Advert" />}
          value={advert}
          onChange={(_event, newAdvert) => {
            setAdvert(newAdvert);
          }}
        />
        <TextField
          label="Photograph"
          value={photograph}
          onChange={(e) => setPhotograph(e.target.value)}
          placeholder="https://example.com/image.jpg"
        />
        <LoadingButton
          loading={loading}
          variant="contained"
          onClick={addPhotograph}
        >
          Add
        </LoadingButton>
      </Stack>
    </Paper>
  );
}
