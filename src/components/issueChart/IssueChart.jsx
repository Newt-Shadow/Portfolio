import React from "react";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import "./IssueChart.css";
import IssueData from "../../shared/opensource/issues.json";

const IssueChart = () => {
  const data = {
    labels: ["Open", "Closed"],
    datasets: [
      {
        data: [IssueData.open, IssueData.closed],
        backgroundColor: ["#28a745", "#d73a49"],
        hoverBackgroundColor: ["#28a745dd", "#d73a49dd"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      duration: 4000,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 2,
      },
    },
  };

  return (
    <div className="issue-chart">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="issue-chart-header">Issue Distribution</h2>
      </motion.div>
      <Doughnut data={data} options={chartOptions} />
    </div>
  );
};

export default IssueChart;
