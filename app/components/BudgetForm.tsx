"use client";

import { useState } from "react";

export default function BudgetForm({
  onSetBudget,
}: {
  onSetBudget: (amount: number) => void;
}) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSetBudget(Number(amount));
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 bg-[#1a1a1a] p-4 rounded-md"
    >
      <h2 className="text-lg font-semibold">Set Monthly Budget</h2>
      <input
        type="number"
        className="w-full p-2 rounded bg-[#252525]"
        placeholder="Enter Budget Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="bg-green-600 w-full py-2 rounded mt-2">
        Save Budget
      </button>
    </form>
  );
}
