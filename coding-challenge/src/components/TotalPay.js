import React, { useState } from "react";

export default function TotalPay({ bill, feedback1, feedback2 }) {
  let totalFeedbackPercentage = (feedback1 + feedback2) / 2 / 100;

  return (
    <div>
      {bill > 0
        ? `You pay $${bill} + $${bill * totalFeedbackPercentage} tip`
        : "NO VALUE"}
    </div>
  );

  // return bill > 0 ? { bill } : "No value entered!";
}
