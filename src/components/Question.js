import React from "react";

const Question = ({ text }) => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold">{text}</h2>
    </div>
  );
};

export default Question;
