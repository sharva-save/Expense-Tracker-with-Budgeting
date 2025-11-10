"use client";

import { useState } from "react";

const categories = [
  "Food",
  "Travel",
  "Shopping",
  "Bills",
  "Entertainment",
  "Groceries",
  "Gym Supplements",
  "Rent / EMI",
  "Food Outside",
  "Other",
];

export default function AddExpenseForm({
  onAddExpense,
}: {
  onAddExpense: (data: any) => void;
}) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!category) {
      alert("Please select a category");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    if (!date) {
      alert("Please select a date");
      return;
    }

    onAddExpense({ category, amount: Number(amount), date });

    setCategory("");
    setAmount("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 bg-gray-200 dark:bg-[#1a1a1a] p-4 rounded-md"
    >
      <h2 className="text-lg font-semibold">Add Expense</h2>

      <select
        className="w-full p-2 rounded bg-gray-300 dark:bg-[#252525]"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <input
        className="w-full p-2 rounded bg-gray-300 dark:bg-[#252525]"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        className="w-full p-2 rounded bg-gray-300 dark:bg-[#252525]"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button className="bg-red-600 w-full py-2 rounded mt-2 hover:bg-red-700 transition">
        Add Expense
      </button>
    </form>
  );
}
