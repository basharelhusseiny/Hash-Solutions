import "./ShinyText.css";

const ShinyText = ({ text, disabled = false, speed = 5 }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${
        disabled ? "disabled" : ""
      } relative container mx-auto text-center top-47 text-lg sm:text-xl`}
      style={{ animationDuration }}
    >
      <div className="max-w-5xl mx-auto px-5">{text}</div>
    </div>
  );
};

export default ShinyText;
