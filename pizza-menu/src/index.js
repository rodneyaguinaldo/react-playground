import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    src: "https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/focaccia.jpg?raw=true",
    price: 10,
    soldOut: true,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mushroom",
    src: "https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/funghi.jpg?raw=true",
    price: 5,
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>Authentic Italian cuisine. 2 creative dishes to choose from.</p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu!</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        src="https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/focaccia.jpg?raw=true"
        price="20"
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        src="https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/funghi.jpg?raw=true"
        price="10"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut && "sold-out"}`}>
      <img src={pizzaObj.src} alt={pizzaObj.name} />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>

      {pizzaObj.soldOut ? <span>Sold out</span> : <span>pizzaObj.price</span>}
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online!</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>We'll open in a bit!</p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
