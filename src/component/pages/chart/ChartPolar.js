import React, { Component } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

export default class ChartPolar extends Component {
  render() {
    const data = {
      labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
      datasets: [
        {
          label: "My First Dataset",
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            "#17c1e8",
            "#cb0c9f",
            "#3A416F",
            "#a8b8d8",
            "#82d616",
          ],
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
    };
    return (
      <div>
        <Chart type="polarArea" data={data} options={options} height={300} />
      </div>
    );
  }
}
