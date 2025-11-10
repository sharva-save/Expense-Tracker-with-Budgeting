React Expense Tracker (Task 2)
📌 Overview

This is an Expense Tracker web application built using Next.js + React + Tailwind CSS.
The application allows users to manage and track their Income, Expenses, and Monthly Budget with automatic calculation of totals and remaining balance.

This project is submitted for Intern Full Stack Task - Task 2: Expense Tracker with Budgeting.

✨ Features Implemented
Feature	Description
Add Income	Add income with amount and source
Add Expenses	Add expenses with amount, category, and date
Budget Management	Set monthly budget and track remaining balance
Summary Section	Shows total income, total expenses, remaining from income & budget
Transaction List	Displays all entered transactions
Local Storage	Data remains saved even after page refresh
Dark/Light Theme Toggle	User can switch theme instantly
Expense Pie Chart	Visual chart representation of spending by category
🛠 Tech Stack Used

Next.js

React

Tailwind CSS

Chart.js

react-chartjs-2

LocalStorage

📂 Folder Structure
app/
  components/
    AddExpenseForm.tsx
    AddIncomeForm.tsx
    BudgetForm.tsx
    Summary.tsx
    TransactionList.tsx
    ExpenseChart.tsx
  page.tsx
styles/
  globals.css

🚀 How to Run the Project Locally
1) Clone the repository
git clone <your_repo_link_here>

2) Move inside project folder
cd react-expense-tracker

3) Install dependencies
npm install

4) Run development server
npm run dev


Open browser at:

http://localhost:3000