import { useMemo, useRef } from "react";
import EChartsReact from "echarts-for-react";

import { HistogramProps } from "./Histogram.types";
import { translateChartData } from "../../utils/DataUtils";

import "./Histogram.css";

const Histogram = ({ data }: HistogramProps) => {
  const chartRef = useRef(null);
  const histogramData = useMemo(() => translateChartData(data), [data]);

  const chartConfig = {
    xAxis: {
      type: "category",
      data: Object.keys(histogramData),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: Object.values(histogramData),
        type: "bar",
        colorBy: "data",
      },
    ],
    tooltip: {
      showTooltip: true,
    },
  };

  return (
    <div data-testid="histogram-chart" className="chartContainer">
      <EChartsReact
        ref={chartRef}
        option={chartConfig}
        style={{
          height: "400px",
          width: "600px",
        }}
      />
    </div>
  );
};

export default Histogram;
