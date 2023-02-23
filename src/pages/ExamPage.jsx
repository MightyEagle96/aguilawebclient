import { Avatar, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { loggedInUser } from "../httpService";
import InstructionPage from "./InstructionPage";

export default function ExamPage() {
  const [examData, setExamData] = useState(null);
  const [activeSubject, setActiveSubject] = useState(null);
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      e.returnValue =
        "Refreshing this page will disrupt your exam. Are you sure?";
    });
  }, []);

  const changeQuestions = (id) => {
    const initialQuestions = examData.questions.questionBanks.find(
      (c) => c.subject === id
    );
    if (initialQuestions) {
      setQuestions(initialQuestions);
    }
  };

  const getIndex = (subjectId) => {
    let questionIndex = 0;
    examData.subjects.forEach((c) => {
      if (c._id === subjectId) return (questionIndex = c.questionIndex);
    });

    return questionIndex;
  };

  const changeQuestion = (subjectId, questionIndex) => {
    const { subjects } = examData;

    const index = subjects.findIndex((c) => c._id === subjectId);
    if (index >= 0) {
      subjects[index].questionIndex = questionIndex;

      setExamData({ ...examData, subjects });
    }
  };
  return (
    <div>
      {examData ? (
        <div>
          <div className="row m-0 examPage">
            <div className="col-lg-10 d-flex flex-column">
              <div className="p-3 ">
                <div className="text-center">
                  {examData.subjects.map((c, i) => (
                    <Button
                      onClick={() => {
                        setActiveSubject(c);
                        changeQuestions(c._id);
                      }}
                      key={i}
                      className="me-2"
                      variant={
                        c.name === activeSubject.name ? "contained" : "outlined"
                      }
                    >
                      {c.name}
                    </Button>
                  ))}
                </div>

                <div>
                  <Typography>
                    Question {getIndex(activeSubject._id) + 1}
                  </Typography>
                </div>
              </div>
              <div className="p-3 mt-auto">
                {questions.questions.map((c, i) => (
                  <Button
                    onClick={() => changeQuestion(activeSubject._id, i)}
                    key={i}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
            </div>
            <div className="col-lg-2 d-flex flex-column bg-light">
              <div className="mt-5">
                <div className="d-flex justify-content-center">
                  <Avatar sx={{ height: 100, width: 100 }} />
                </div>
                <div className="mt-3">
                  <Typography variant="caption" gutterBottom>
                    Candidate
                  </Typography>
                  <Typography variant="h6" fontWeight={600}>
                    {loggedInUser.candidate.firstName}{" "}
                    {loggedInUser.candidate.lastName}
                  </Typography>
                </div>
                <div className="mt-2">
                  <Typography variant="caption" gutterBottom>
                    Registration Number
                  </Typography>
                  <Typography variant="h6" fontWeight={600}>
                    {loggedInUser.candidate.registrationNumber}
                  </Typography>
                </div>
                <div className="mt-2">
                  <Typography variant="caption" gutterBottom>
                    Seat Number
                  </Typography>
                  <Typography variant="h6" fontWeight={600}>
                    {loggedInUser.candidate.seatNumber}
                  </Typography>
                </div>
              </div>
              <div className="mt-auto mb-5">
                <div>
                  <Typography
                    color="#2a3eb1"
                    variant="h3"
                    fontWeight={900}
                    gutterBottom
                  >
                    {activeSubject.name}
                  </Typography>
                  <Typography fontWeight={900} color="#3d5afe">
                    Question 0 of {questions.questions.length}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <InstructionPage
          setExamData={setExamData}
          setActiveSubject={setActiveSubject}
          setQuestions={setQuestions}
        />
      )}
    </div>
  );
}
