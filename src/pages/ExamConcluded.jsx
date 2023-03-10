import { Button, Typography } from "@mui/material";
import React from "react";
import MyFooter from "../components/MyFooter";

export default function ExamConcluded() {
  return (
    <div className="mb-5 mt-5">
      <div style={{ height: 400 }}>
        <div className="container h-100 d-flex align-items-center ">
          <div>
            <Typography variant="h3" gutterBottom fontWeight={700}>
              Exam submitted successfully
            </Typography>
            <Button component="a" href="/">
              back to login screen
            </Button>
          </div>
        </div>
      </div>
      <MyFooter />
    </div>
  );
}
