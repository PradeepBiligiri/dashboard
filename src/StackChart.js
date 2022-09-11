import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      lineTension: 0.2,
      label: "Total Win",
      data: [30, 100, 50, 150, 80, 250, 45, 200],
      borderColor: "#583bab",
      backgroundColor: "rgba(88, 58, 171 / 50% )",
    },
    {
      fill: true,
      lineTension: 0.2,
      label: "Total Loss",
      data: [100, 60, 120, 20, 240, 45, 100, 45],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function StackChart() {
  return <Line options={options} data={data} />;
}
