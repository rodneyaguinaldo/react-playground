import React, { useState } from "react";
import Feedback from "./Feedback";
// import Feedback2 from "./Feedback2";
import TotalPay from "./TotalPay";
import ResetButton from "./ResetButton";

export default function HowMuchBill() {
  const [bill, setBill] = useState(0);
  const [feedback1, setFeedback1] = useState(0);
  const [feedback2, setFeedback2] = useState(0);

  function changeFeedback(feedback, feedbackValue) {
    feedback === 1 ? setFeedback1(feedbackValue) : setFeedback2(feedbackValue);
  }

  function changeBill(value) {
    return value >= 0 && setBill(value);
  }

  return (
    <div>
      How much was the bill?{" "}
      <input
        value={bill}
        type="number"
        min="0"
        onChange={(e) => changeBill(Number(e.target.value))}
      />
      <Feedback
        feedbackcount={1}
        currentValue={feedback1}
        feedback={changeFeedback}
      >
        How much did you like the service?{" "}
      </Feedback>
      <Feedback
        feedbackcount={2}
        currentValue={feedback2}
        feedback={changeFeedback}
      >
        How much did your friend like the service?
      </Feedback>
      <TotalPay bill={bill} feedback1={feedback1} feedback2={feedback2} />
      <ResetButton changeBill={changeBill} changeFeedback={changeFeedback} />
    </div>
  );
}
