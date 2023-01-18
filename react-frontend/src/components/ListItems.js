import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { useNavigate } from "react-router-dom";

function ListItemWithNav({ text, path }) {
  const navigate = useNavigate();
  return (
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary={text} onClick={() => navigate(path)} />
    </ListItemButton>
  );
}

export default function MainListItems() {
  return (
    <React.Fragment>
      <ListItemWithNav text="Add Story" path="/add-story" />
      <ListItemWithNav text="View Payments" path="/view-payments" />
      <ListItemWithNav text="Add Photograph" path="/add-photograph" />
      <ListItemWithNav text="Payments" path="/payments" />
    </React.Fragment>
  );
}
