"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseChart({ expenses }: { expenses: any[] }) {
  const grouped = expenses.reduce((acc: any, curr: any) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  const labels = Object.keys(grouped);
  const dataValues = Object.values(grouped);

  const backgroundColors = [
    "#ef4444",
    "#3b82f6",
    "#22c55e",
    "#eab308",
    "#a855f7",
    "#ec4899",
    "#14b8a6",
    "#f97316",
    "#06b6d4",
    "#94a3b8",
  ];

  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: backgroundColors.slice(0, labels.length),
      },
    ],
  };

  return (
    <div className="bg-[#1a1a1a] p-4 rounded-md mt-6">
      <h2 className="text-lg font-semibold mb-4">Expense Breakdown</h2>
      <Pie data={data} />
    </div>
  );
}
