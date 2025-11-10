"use client";

import { useState } from "react";

export default function AddIncomeForm({
  onAddIncome,
}: {
  onAddIncome: (data: any) => void;
}) {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!source) {
      alert("Please enter income source");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    onAddIncome({
      source,
      amount: Number(amount),
      date: new Date().toISOString(),
    });
    setSource("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 bg-gray-200 dark:bg-[#1a1a1a] p-4 rounded-md"
    >
      <h2 className="text-lg font-semibold">Add Income</h2>

      <input
        className="w-full p-2 rounded bg-gray-300 dark:bg-[#252525]"
        placeholder="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />

      <input
        className="w-full p-2 rounded bg-gray-300 dark:bg-[#252525]"
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button className="bg-blue-600 w-full py-2 rounded mt-2 hover:bg-blue-700 transition">
        Add Income
      </button>
    </form>
  );
}
