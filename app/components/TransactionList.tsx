"use client";

export default function TransactionList({ transactions }: { transactions:any[] }) {

  return (
    <div className="bg-[#1a1a1a] p-4 rounded-md mt-6">
      <h2 className="text-lg font-semibold mb-3">Transactions</h2>

      {transactions.length === 0 ? (
        <p className="text-gray-500 text-sm">No transactions added yet.</p>
      ) : (
        <ul className="space-y-2">
          {transactions.map((t, index)=>(
            <li key={index} className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-sm text-gray-300">{t.category || t.source}</span>
              <span className={`text-sm font-semibold ${t.type === "income" ? "text-green-500" : "text-red-500"}`}>
                ₹{t.amount}
              </span>
              <span className="text-xs text-gray-500">{t.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
