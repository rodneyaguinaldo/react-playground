import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./components/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing!"]}
      defaultRating={1}
      size={28}
    />
    <StarRating
      maxRating={5}
      color="green"
      messages={["HAHA", "HEHE", "HIHI", "HOHO", "HUHU!"]}
      defaultRating={3}
    /> */}
  </React.StrictMode>
);
