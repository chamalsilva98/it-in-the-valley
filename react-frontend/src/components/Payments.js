import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Title from "./Title";

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

export default function Payments() {
  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <Title>Payments</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Invoice ID</TableCell>
            <TableCell>Story/Photograph</TableCell>
            <TableCell>Story/Photograph ID</TableCell>
            <TableCell>Advert</TableCell>
            <TableCell align="right">Payment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.amount > 500 ? "Story" : "Photograph"}</TableCell>
              <TableCell>{Math.round(Math.random() * 1000)}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  {row.amount > 500 ? (
                    `$${row.amount}`
                  ) : (
                    <>
                      <TextField label="Amount" size="small" />
                      <LoadingButton loading={false} variant="contained">
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
  );
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
];
