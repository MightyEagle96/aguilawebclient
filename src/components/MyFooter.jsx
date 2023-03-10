import { Avatar, Typography } from "@mui/material";
import React from "react";
import "./MyFooter.css";
import footerLogo from "../images/aguila.png";

function MyFooter() {
  return (
    <div className="myFooter d-flex align-items-center">
      <div className="col-12">
        <div className="d-flex justify-content-center">
          <Avatar src={footerLogo} sx={{ height: 100, width: 100 }} />
        </div>
        <Typography textAlign={"center"} fontWeight={600} gutterBottom>
          AGUILA
        </Typography>
        <Typography textAlign={"center"} gutterBottom>
          All rights reserved{" "}
          <i class="fas fa-copyright    "> {new Date().getFullYear()}</i>
        </Typography>
        <div className="ps-4">
          <Typography variant="caption" gutterBottom>
            Powered by Mighty Eagle Tech
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default MyFooter;
