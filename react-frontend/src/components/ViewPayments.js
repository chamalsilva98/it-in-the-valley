import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import * as React from "react";
import { AuthContext } from "../App";
import { roles } from "./ListItems";
import Title from "./Title";

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

export default function ViewPayments() {
  const [user] = React.useContext(AuthContext);
  const [payments, setPayments] = React.useState([]);

  const isJournalist = user.roles.includes(roles.ROLE_JOURNALIST);

  const getPayments = async () => {
    const response = await axios.get(
      `/api/${isJournalist ? "story" : "photograph"}/user/` + user.id
    );
    setPayments(response.data);
  };

  React.useEffect(() => {
    getPayments();
  }, []);

  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <Title>View Payments</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>{isJournalist ? "Story" : "Photograph"} ID</TableCell>
            <TableCell>Advert</TableCell>
            <TableCell align="right">Payment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.map((story) => (
            <TableRow key={story.id}>
              <TableCell>{story.id}</TableCell>
              <TableCell>{story.advert.title}</TableCell>
              <TableCell align="right">
                {!story.payment ? "Pending" : `$${story.payment}`}
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
