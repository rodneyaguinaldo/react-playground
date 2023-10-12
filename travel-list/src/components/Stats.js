import React from "react";

function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 📦!</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = parseFloat((numPacked / numItems) * 100).toFixed(2);

  return (
    <footer className="stats">
      <em>
        {numItems === numPacked
          ? "You are ready to go! let's go! 🛫"
          : `💼 You have ${numItems} items on your list and you packed ${numPacked} ${percentage}%`}
      </em>
    </footer>
  );
}
export default Stats;
