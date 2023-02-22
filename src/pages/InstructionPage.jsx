import { Button, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/instruction.jpg";

export default function InstructionPage() {
  return (
    <div>
      <div className="mt-5 mb-5 container">
        <div className="row">
          <div className="col-lg-6 ">
            <img src={logo} alt="logo" className="img-fluid shadow rounded" />
          </div>
          <div className="col-lg-6 d-flex flex-column bd-highlight bg-light p-4 rounded shadow-sm">
            <div>
              <div className="mb-2">
                <Typography variant="h4" fontWeight={600}>
                  INSTRUCTIONS
                </Typography>
                <hr />
              </div>
              <div>
                <Typography gutterBottom>1. Don't Copy</Typography>
                <Typography gutterBottom>2. Obey instruction 1</Typography>
              </div>
            </div>
            <div className="mt-auto">
              <Button variant="contained">Begin Exam</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
