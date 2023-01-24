import LoadingButton from "@mui/lab/LoadingButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Title from "./Title";

export default function Login() {
  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Title>Login</Title>
      <Stack spacing={2}>
        <TextField label="Username" />
        <TextField label="Password" />
        <LoadingButton loading={false} variant="contained">
          Login
        </LoadingButton>
      </Stack>
    </Paper>
  );
}
