import React from "react";

export default function ManageAccount({
  children,
  actionType,
  dispatch,
  isDisabled,
}) {
  return (
    <p>
      <button
        onClick={() => dispatch({ type: actionType })}
        disabled={isDisabled}
      >
        {children}
      </button>
    </p>
  );
}
