import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    if (!items.length) {
      setItems((items) => [...items, item]);
    } else {
      let isAdded = false;
      items.map((it) => {
        if (it.description === item.description) isAdded = true;
        return null;
      });

      !isAdded && setItems((items) => [...items, item]);
    }
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlToggledItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearItems() {
    if (
      items.length &&
      window.confirm("Are you sure you want to delete all items?")
    )
      setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handlToggledItem}
        onClearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
