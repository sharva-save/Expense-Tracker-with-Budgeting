"use client";

export default function Summary({ totalIncome, totalExpense, remaining }: { totalIncome:number, totalExpense:number, remaining:number }) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      
      <div className="bg-[#1a1a1a] p-4 rounded-md text-center">
        <h3 className="text-md font-semibold text-gray-300">Total Income</h3>
        <p className="text-2xl font-bold text-green-500 mt-2">₹{totalIncome}</p>
      </div>

      <div className="bg-[#1a1a1a] p-4 rounded-md text-center">
        <h3 className="text-md font-semibold text-gray-300">Total Expense</h3>
        <p className="text-2xl font-bold text-red-500 mt-2">₹{totalExpense}</p>
      </div>

      <div className="bg-[#1a1a1a] p-4 rounded-md text-center">
        <h3 className="text-md font-semibold text-gray-300">Remaining Balance</h3>
        <p className="text-2xl font-bold text-blue-500 mt-2">₹{remaining}</p>
      </div>

    </div>
  );
}
