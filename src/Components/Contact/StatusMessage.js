import "./StatusMessageStyle.scss";
import React from "react";

const StatusMessage = ({ isError, messages, isDisplayed }) => {
  return (
    <p
      className={`statusMessage ${isError ? "failure" : "successful"} ${
        isDisplayed ? "active" : ""
      }`}
    >
      {messages}
    </p>
  );
};

export default StatusMessage;
