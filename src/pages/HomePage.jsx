import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Login } from "@mui/icons-material";
import { httpService } from "../httpService";

import { aguilaClient } from "../util";
import MySnackBar from "../components/MySnackBar";

export default function HomePage() {
  const [regNumber, setRegNumber] = useState("");
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    setLoading(true);
    const { data, error } = await httpService.post("login", { regNumber });

    if (error) {
      setOpen(true);
      setSeverity("error");
      setMessage(error);
    }
    if (data) {
      sessionStorage.setItem(aguilaClient, JSON.stringify(data));
      window.location.assign("/");
    }
    setLoading(false);
  };
  return (
    <div className="row m-0">
      <div className="col-lg-6 homeImg"></div>
      <div className="col-lg-6 d-flex align-items-center">
        <div className="col-lg-6 ms-4">
          <div className="mb-4">
            <Typography
              variant="h3"
              fontWeight={900}
              color="#2a3eb1"
              textAlign={"center"}
            >
              AGUILA
            </Typography>
          </div>
          <div>
            <form onSubmit={submitForm}>
              <TextField
                onChange={(e) => setRegNumber(e.target.value)}
                fullWidth
                label="Registration Number"
                helperText="Candidate registration number"
              />
              <LoadingButton
                type="submit"
                variant="contained"
                fullWidth
                loading={loading}
                endIcon={<Login />}
                className="mt-3"
              >
                <span>login</span>
              </LoadingButton>
            </form>
          </div>
        </div>
      </div>

      <MySnackBar
        open={open}
        setOpen={setOpen}
        severity={severity}
        message={message}
      />
    </div>
  );
}
