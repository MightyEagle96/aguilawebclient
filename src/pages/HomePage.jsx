import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Login } from "@mui/icons-material";
import { httpService } from "../httpService";
import SnackBar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { forwardRef } from "react";

export default function HomePage() {
  const [regNumber, setRegNumber] = useState("");
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const submitForm = async (e) => {
    e.preventDefault();

    setLoading(true);
    const { data, error } = await httpService.post("login", { regNumber });

    if (error) {
      setOpen(true);
      setSeverity("error");
      setMessage(error);
    }
    if (data) console.log(data);
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

      <SnackBar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "25%" }}>
          {message}
        </Alert>
      </SnackBar>
    </div>
  );
}
