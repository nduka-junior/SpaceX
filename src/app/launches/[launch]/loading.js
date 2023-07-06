"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { blue } from "@mui/material/colors";

function Loading() {
  const colorBlue = blue[700];
  console.log("Loading");
  return (
    <div className="p-[20px] flex justify-center items-center h-[84vh] text-white">
      <Stack sx={{ width: "80%", color: "grey" }} spacing={2}>
        <LinearProgress color="inherit" className="!text-blue" />
      </Stack>
    </div>
  );
}

export default Loading;
