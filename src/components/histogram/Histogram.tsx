import { useEffect, useState } from "react";
import EChartsReact from "echarts-for-react";

import { HistogramProps } from "./Histogram.types";
import { translateChartData } from "../../utils/DataUtils";

import "./Histogram.css";

const Histogram = ({ data }: HistogramProps) => {
  const [chartConfig, setChartConfig] = useState({});
  useEffect(() => {
    const histogramData = translateChartData(data);

    const config = {
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

    setChartConfig(config);
  }, [data]);

  return (
    <div className="chartContainer">
      <EChartsReact option={chartConfig} />
    </div>
  );
};

export default Histogram;
