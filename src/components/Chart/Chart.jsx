import "./Chart.css";
import ChartBar from "../Chart/ChartBar";
const Chart = (properties) => {
  const dataPointValues = properties.dataPoints.map(
    (dataPoint) => dataPoint.value
  );
  const totalMaximumValue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {properties.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximumValue} /* default: null */
        />
      ))}
    </div>
  );
};

export default Chart;
