import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import axios from "axios";
import * as React from "react";
import Title from "./Title";

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

export default function Payments() {
  const [stories, setStories] = React.useState([]);
  const [photographs, setPhotographs] = React.useState([]);
  const [payments, setPayments] = React.useState({});
  const [loadings, setLoadings] = React.useState({});

  const getStories = async () => {
    const response = await axios.get("/api/story/");
    setStories(response.data);
    setPayments((payments) => ({
      ...payments,
      ...response.data.reduce(
        (prev, curr) => ({ ...prev, ["s" + curr.id]: "" }),
        {}
      ),
    }));
    setLoadings((loadings) => ({
      ...loadings,
      ...response.data.reduce(
        (prev, curr) => ({ ...prev, ["s" + curr.id]: false }),
        {}
      ),
    }));
  };

  const getPhotographs = async () => {
    const response = await axios.get("/api/photograph/");
    setPhotographs(response.data);
    setPayments((payments) => ({
      ...payments,
      ...response.data.reduce(
        (prev, curr) => ({ ...prev, ["p" + curr.id]: "" }),
        {}
      ),
    }));
    setLoadings((loadings) => ({
      ...loadings,
      ...response.data.reduce(
        (prev, curr) => ({ ...prev, ["p" + curr.id]: false }),
        {}
      ),
    }));
  };

  React.useEffect(() => {
    getStories();
    getPhotographs();
  }, []);

  const pay = async (type, id) => {
    setLoadings((loadings) => ({
      ...loadings,
      [type + id]: true,
    }));
    try {
      await axios.put(`/api/${type === "s" ? "story" : "photograph"}/${id}`, {
        payment: payments[type + id],
      });
      const callB = (fn) =>
        fn((arr) =>
          arr.map((item) => {
            if (item.id === id) {
              return { ...item, payment: payments[type + id] };
            }
            return item;
          })
        );
      type === "s" ? callB(setStories) : callB(setPhotographs);
    } catch (error) {
    } finally {
      setLoadings((loadings) => ({
        ...loadings,
        [type + id]: false,
      }));
    }
  };

  return (
    <Stack spacing={2}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Title>Payments of Journalists</Title>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>Story ID</TableCell>
              <TableCell>Advert</TableCell>
              <TableCell align="right">Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stories.map((story) => (
              <TableRow key={story.id}>
                <TableCell>{story.id}</TableCell>
                <TableCell>{story.advert.title}</TableCell>
                <TableCell align="right">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    {story.payment ? (
                      `$${story.payment}`
                    ) : (
                      <>
                        <TextField
                          label="Amount"
                          size="small"
                          value={payments["s" + story.id]}
                          onChange={(e) =>
                            setPayments((payments) => ({
                              ...payments,
                              ["s" + story.id]: e.target.value,
                            }))
                          }
                        />
                        <LoadingButton
                          loading={loadings["s" + story.id]}
                          variant="contained"
                          onClick={() => pay("s", story.id)}
                        >
                          Pay
                        </LoadingButton>
                      </>
                    )}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Title>Payments of Photographers</Title>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>Photograph ID</TableCell>
              <TableCell>Advert</TableCell>
              <TableCell align="right">Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {photographs.map((photograph) => (
              <TableRow key={photograph.id}>
                <TableCell>{photograph.id}</TableCell>
                <TableCell>{photograph.advert.title}</TableCell>
                <TableCell align="right">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    {photograph.payment ? (
                      `$${photograph.payment}`
                    ) : (
                      <>
                        <TextField
                          label="Amount"
                          size="small"
                          value={payments["p" + photograph.id]}
                          onChange={(e) =>
                            setPayments((payments) => ({
                              ...payments,
                              ["p" + photograph.id]: e.target.value,
                            }))
                          }
                        />
                        <LoadingButton
                          loading={loadings["p" + photograph.id]}
                          variant="contained"
                          onClick={() => pay("p", photograph.id)}
                        >
                          Pay
                        </LoadingButton>
                      </>
                    )}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Stack>
  );
}
