import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function MainListItems() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText
          primary="Add Story"
          onClick={() => navigate("/add-story")}
        />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText
          primary="View Payments"
          onClick={() => navigate("/view-payments")}
        />
      </ListItemButton>
    </React.Fragment>
  );
}
