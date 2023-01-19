import LoadingButton from "@mui/lab/LoadingButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Title from "./Title";

export default function ReqAdvert() {
  return (
    <Paper sx={{ p: 2 }}>
      <Title>Request Advert</Title>
      <Stack spacing={2}>
        <TextField label="Title" />
        <TextField label="Description" multiline minRows={3} />
        <LoadingButton loading={false} variant="contained">
          Add
        </LoadingButton>
      </Stack>
    </Paper>
  );
}
