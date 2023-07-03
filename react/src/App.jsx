import React, { useState, useEffect, useMemo } from "react";
import "./App.css";

function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(null);
  const [expense, setExpense] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const sampleExpenses = [
    { id: 1, description: "Rent", amount: 1000 },
    { id: 2, description: "Groceries", amount: 200 },
    { id: 3, description: "Utilities", amount: 150 },
    { id: 4, description: "Transportation", amount: 100 },
    { id: 5, description: "Entertainment", amount: 50 },
  ];

  useState(() => {
    setExpense(sampleExpenses);
    const total = sampleExpenses.reduce((acc, curr) => acc + curr.amount, 0);
    setTotalAmount(total);
  }, []);

  const validateExpense = () => {
    setError("");
    if (!description) {
      setError("Please enter a description.");
      return false;
    }
    if (!amount) {
      setError("Please enter an amount.");
      return false;
    }
    if (isNaN(amount) || Number(amount) <= 0) {
      setError("Please enter a valid amount.");
      return false;
    }
    return true;
  };

  const addExpense = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      description,
      amount: parseInt(amount),
    };
    setExpense([...expense, newExpense]);
    setTotalAmount(totalAmount + parseInt(amount));
    setDescription("");
    setAmount(0);
    setSuccessMessage("Expense added successfully!");
  };

  const expensesList = useMemo(() => {
    if (expense.length > 0) {
      return (
        <table className="expense">
          <tbody>
            {expense.map((t) => (
              <tr key={t.id}>
                <td>{t.description}</td>
                <td className={t.amount > 100 ? "high-amount" : ""}>{t.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return <p>No expenses written.</p>;
    }
  }, [expense]);

  {/*
  const addExpense = (e) => {
    e.preventDefault();
    setExpense([...expense, { id: Date.now(), description, amount }]);
    setDescription('')
    setAmount(0)
  } */}
  return (
    <div>
      <h1>Karl's Expense Tracker</h1>

      <form onSubmit={addExpense}>
        <div className="container">
          <div className="input-group">
            <label className="description">Description: </label>
            <input
              name="description"
              type="text"
              placeholder="Enter Description"
              required
              pattern="[A-Za-z\s]+"
              title="Please enter text only"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>

          <div className="input-group">
            <label className="Amount">Amount: </label>
            <input
              name="amount"
              type="number"
              placeholder="Enter Amount"
              required
              min="0"
              step="0.01"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </div>

          <div class="btnExpense">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}

      <p>
        Total Expenses <b id="totalAmount">PHP {totalAmount}</b>
      </p>

      <h3>My Expenses</h3>

      {expensesList}
    </div>
  );
}
export default App;
