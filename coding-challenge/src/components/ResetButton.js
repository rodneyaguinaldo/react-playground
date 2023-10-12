import React, { useState } from "react";

export default function ResetButton({ changeBill, changeFeedback }) {
  function resetValues() {
    console.log("RESET!");
    changeBill(Number(0));
    changeFeedback(1, Number(0));
    changeFeedback(2, Number(0));
  }

  return (
    <p>
      <button onClick={() => resetValues()}>Reset</button>
    </p>
  );
}
