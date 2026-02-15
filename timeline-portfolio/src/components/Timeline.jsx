import { useState } from "react";
import { timelineSteps } from "../data/steps";
import TimelineItem from "./TimelineItem";
import "./timeline.css";

function Timeline() {
  const [activeStep, setActiveStep] = useState(null);
  const handleStepClick = (id) => {
  setActiveStep((prev) => (prev === id ? null : id));
};

  return (
    <div className="timeline">
      {timelineSteps.map((step) => (
        <TimelineItem
          key={step.id}
          step={step}
          isActive={activeStep === step.id}
          onClick={() => handleStepClick(step.id)}

        />
      ))}
    </div>
  );
}

export default Timeline;
