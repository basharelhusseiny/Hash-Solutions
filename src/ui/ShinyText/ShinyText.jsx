import "./ShinyText.css";

const ShinyText = ({ text, disabled = false, speed = 5 }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${
        disabled ? "disabled" : ""
      } relative max-w-6xl mx-auto text-center top-45 text-2xl`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
