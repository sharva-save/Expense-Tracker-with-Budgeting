"use client";

import { useState } from "react";
import AddIncomeForm from "./components/AddIncomeForm";
import AddExpenseForm from "./components/AddExpenseForm";
import BudgetForm from "./components/BudgetForm";
import Summary from "./components/Summary";
import TransactionList from "./components/TransactionList";
import ExpenseChart from "./components/ExpenseChart";

export default function Home() {
  const [incomes, setIncomes] = useState<any[]>([]);
  const [expenses, setExpenses] = useState<any[]>([]);
  const [budget, setBudget] = useState<number>(0);

  const addIncome = (data: any) => {
    setIncomes([...incomes, { ...data, type: "income" }]);
  };

  const addExpense = (data: any) => {
    setExpenses([...expenses, { ...data, type: "expense" }]);
  };

  const totalIncome = incomes.reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  const remainingFromIncome = totalIncome - totalExpense;
  const remainingFromBudget = budget - totalExpense;

  const allTransactions = [...incomes, ...expenses];

  return (
    <main className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Expense Tracker</h1>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-5">
          <AddIncomeForm onAddIncome={addIncome} />
          <AddExpenseForm onAddExpense={addExpense} />
        </div>

        {/* Right Column */}
        <div className="space-y-5">
          <BudgetForm onSetBudget={(amt) => setBudget(amt)} />
          <Summary
            totalIncome={totalIncome}
            totalExpense={totalExpense}
            remaining={remainingFromIncome}
          />
          <div className="bg-[#1a1a1a] p-4 rounded-md">
            <h3 className="text-md font-semibold text-gray-300">
              Remaining From Budget
            </h3>
            <p className="text-2xl font-bold text-purple-500 mt-2">
              ₹{remainingFromBudget}
            </p>
          </div>
        </div>
      </div>

      <TransactionList transactions={allTransactions} />
      <ExpenseChart expenses={expenses} />
    </main>
  );
}
