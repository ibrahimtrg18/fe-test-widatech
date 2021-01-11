import React from "react";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

const Graph = () => {
  const [temperature, setTemperature] = React.useState([]);

  const graphSetting = {
    series: [
      {
        name: "Temperature",
        data: temperature,
      },
    ],
    options: {
      chart: {
        animations: {
          enabled: false,
        },
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
      },
      markers: {
        size: 0,
      },
      title: {
        text: "Temperature",
        align: "left",
      },
      yaxis: {
        title: {
          text: "Temperature",
        },
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val.toFixed(0);
          },
        },
      },
    },
  };

  setTimeout(() => {
    setTemperature([
      ...temperature,
      { x: new Date(), y: (Math.random() * 52 + 18).toFixed(2) },
    ]);
  }, 10000);

  return (
    <Chart
      options={graphSetting.options}
      series={graphSetting.series}
      type="area"
      width="100%"
    />
  );
};

export default Graph;
