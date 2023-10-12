import React, { useState } from "react";

export default function Feedback({
  feedbackcount,
  currentValue,
  feedback,
  children,
}) {
  function changeFeedback(value) {
    feedback(feedbackcount, Number(value));
  }

  return (
    <div>
      {children}
      <select
        onChange={(e) => changeFeedback(e.target.value)}
        value={currentValue}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={15}>It was Good (15%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
