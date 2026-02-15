function TimelineItem({ step, isActive, onClick }) {
  return (
    <div
      className={`timeline-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <h3>{step.title}</h3>
      {isActive && <p>{step.description}</p>}
    </div>
  );
}

export default TimelineItem;
