import React from "react";
import { TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Login } from "@mui/icons-material";

export default function HomePage() {
  return (
    <div className="row m-0">
      <div className="col-lg-6 homeImg"></div>
      <div className="col-lg-6 d-flex align-items-center">
        <div className="col-lg-6">
          <div className="mb-3">
            <Typography variant="h3" fontWeight={900} color="#2a3eb1">
              AGUILA
            </Typography>
          </div>
          <div>
            <TextField
              fullWidth
              label="Registration Number"
              helperText="Candidate registration number"
            />
            <LoadingButton
              variant="outlined"
              fullWidth
              endIcon={<Login />}
              className="mt-3"
            >
              <span>login</span>
            </LoadingButton>
          </div>
        </div>
      </div>
    </div>
  );
}
