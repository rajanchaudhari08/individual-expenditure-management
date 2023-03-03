import "./ChartBar.css";

const ChartBar = (properties) => {
  let barFillHeight = "0%"; /* default: 0% */
  if (properties.maxValue > 0) {
    barFillHeight = Math.round((properties.value / properties.maxValue) * 100);
    // barFillHeight = Math.round((properties.value / properties.maxValue) * 100) + "%";
    // barFillHeight = `${Math.round((properties.value / properties.maxValue) * 100)}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{properties.label}</div>
    </div>
  );
};

export default ChartBar;
