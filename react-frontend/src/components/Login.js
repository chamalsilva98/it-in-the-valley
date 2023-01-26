import LoadingButton from "@mui/lab/LoadingButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../App";
import Title from "./Title";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [, setUser] = useContext(AuthContext);

  const login = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/auth/signin", {
        username,
        password,
      });
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      setUsername("");
      setPassword("");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

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
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoadingButton loading={loading} variant="contained" onClick={login}>
          Login
        </LoadingButton>
      </Stack>
    </Paper>
  );
}
