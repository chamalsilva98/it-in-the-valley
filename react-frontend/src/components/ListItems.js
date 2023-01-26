import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

function ListItemWithNav({ text, path }) {
  const navigate = useNavigate();
  return (
    <ListItemButton onClick={() => navigate(path)}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
}

export const roles = {
  ROLE_JOURNALIST: "ROLE_JOURNALIST",
  ROLE_PHOTOGRAPHER: "ROLE_PHOTOGRAPHER",
  ROLE_ACCOUNTANT: "ROLE_ACCOUNTANT",
  ROLE_ADVERTISER: "ROLE_ADVERTISER",
  ROLE_EDITOR: "ROLE_EDITOR",
};

export default function MainListItems() {
  const [user] = React.useContext(AuthContext);

  if (!user) return null;

  return (
    <React.Fragment>
      {user.roles.includes(roles.ROLE_JOURNALIST) && (
        <>
          <ListItemWithNav text="Add Story" path="/add-story" />
          <ListItemWithNav text="View Payments" path="/view-payments" />
        </>
      )}

      {user.roles.includes(roles.ROLE_PHOTOGRAPHER) && (
        <>
          <ListItemWithNav text="Add Photograph" path="/add-photograph" />
          <ListItemWithNav text="View Payments" path="/view-payments" />
        </>
      )}
      {user.roles.includes(roles.ROLE_ACCOUNTANT) && (
        <>
          <ListItemWithNav text="Payments" path="/payments" />
        </>
      )}
      {user.roles.includes(roles.ROLE_ADVERTISER) && (
        <>
          <ListItemWithNav text="Request Advert" path="/req-advert" />
          <ListItemWithNav text="View Magazines" path="/view-magazines" />
        </>
      )}

      {user.roles.includes(roles.ROLE_EDITOR) && (
        <>
          <ListItemWithNav text="Issue Magazine" path="/issue-magazine" />
        </>
      )}
    </React.Fragment>
  );
}
