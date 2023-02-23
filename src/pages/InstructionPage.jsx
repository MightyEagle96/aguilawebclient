import { Button, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/instruction.jpg";
import { httpService } from "../httpService";

export default function InstructionPage({
  setExamData,
  setActiveSubject,
  setQuestions,
}) {
  const getQuestions = async () => {
    const { data } = await httpService("getExamQuestions");

    if (data) {
      console.log(data);
      data.subjects.forEach((d) => (d.questionIndex = 0));
      setActiveSubject(data.subjects[0]);

      //get the subject id
      const subjectId = data.subjects[0]._id;

      const initialQuestions = data.questions.questionBanks.find(
        (c) => c.subject === subjectId
      );
      if (initialQuestions) {
        setQuestions(initialQuestions);
      }
      setExamData(data);
    }
  };

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
              <Button variant="contained" onClick={getQuestions}>
                Begin Exam
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
