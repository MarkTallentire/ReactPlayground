import "./App.css";
import React, { useState } from "react";

function App() {
  const numberOfSteps = 5;
  const progressCircles = [];

  const [currentStep, setCurrentStep] = useState(0);
  const [currentLineWidth, setCurrentLineWidth] = useState(0);

  const goForwards = () => {
    if (currentStep < numberOfSteps - 1) {
      setCurrentStep(currentStep + 1);
      setCurrentLineWidth(
        currentLineWidth + Math.floor((Number(1) / (numberOfSteps - 1)) * 100)
      );
    }
  };

  const goBackwards = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCurrentLineWidth(
        currentLineWidth - Math.floor((Number(1) / (numberOfSteps - 1)) * 100)
      );
    }
  };

  const renderCircles = () => {
    for (let i = 0; i < numberOfSteps; i++) {
      progressCircles.push(
        <div key={i} className={`circle ${i <= currentStep && "active"}`}>
          {i}
        </div>
      );
    }
  };
  renderCircles();

  return (
    <div className="container">
      <div className="progress-container">
        <div
          className="progress"
          style={{ width: currentLineWidth + "%" }}
        ></div>
        {progressCircles}
      </div>

      <button className="btn" onClick={goBackwards}>
        Previous
      </button>
      <button className="btn" onClick={goForwards}>
        Next
      </button>
    </div>
  );
}

export default App;
