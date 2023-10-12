import { useState } from "react";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

function Apps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((curStep) => curStep - 1);
  }
  function handleNext() {
    if (step < 3) setStep((curStep) => curStep + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  function handleReset() {
    setCount(0);
    setStep(1);
  }
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Steps : {step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) =>
            Number(e.target.value) ? setCount(Number(e.target.value)) : 0
          }
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <div>
        <p>
          <span>
            {count === 0
              ? `Today is ${date.toDateString()}`
              : count > 0
              ? `${count} days from today is ${date.toDateString()}`
              : `${Math.abs(count)} days ago was ${date.toDateString()}`}
          </span>
          {count !== 0 || step !== 1 ? (
            <div>
              <br />
              <button onClick={handleReset}>Reset</button>
            </div>
          ) : null}
        </p>
      </div>
    </div>
  );
}

export default App;
