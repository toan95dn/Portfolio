import "./StatusMessageStyle.scss";
import React, { useState } from "react";

const StatusMessage = ({ isError, messages, isDisplayed }) => {
  return (
    <p
      className={`statusMessage ${isError ? "successful" : "failure"} ${
        isDisplayed ? "active" : ""
      }`}
    >
      {messages}
    </p>
  );
};

export default StatusMessage;
