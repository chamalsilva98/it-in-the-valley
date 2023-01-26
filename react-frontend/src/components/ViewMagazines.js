import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import axios from "axios";
import * as React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AuthContext } from "../App";
import Title from "./Title";

export default function ViewMagazines() {
  const [user] = React.useContext(AuthContext);
  const [magazines, setMagazines] = React.useState([]);

  const getMagazines = async () => {
    const response = await axios.get("/api/magazine/user/" + user.id);
    setMagazines(response.data);
  };

  React.useEffect(() => {
    getMagazines();
  }, []);

  return (
    <Paper sx={{ p: 2 }}>
      <Title>View Magazines</Title>
      <Stack spacing={2}>
        {magazines.map((magazine) => (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{magazine.advert.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div dangerouslySetInnerHTML={{ __html: magazine.document }} />
              {/* <ReactQuill
                theme="snow"
                value={magazine.document}
                readOnly
              /> */}
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Paper>
  );
}
