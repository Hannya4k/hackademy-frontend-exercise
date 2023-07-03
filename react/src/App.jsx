import React, { useState } from "react";
import "./App.css";

function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(null);
  const [expense, setExpense] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

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
  };
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
        <div class="container">
          <div class="input-group">
            <label class="description">Description: </label>
            <input
              name="description"
              type="text"
              placeholder="Enter Description"
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>

          <div class="input-group">
            <label class="Amount">Amount: </label>
            <input
              name="amount"
              type="text"
              placeholder="Enter Amount"
              required
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </div>

          <div class="btnExpense">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>

      <p>
        Total Expenses <b id="totalAmount">PHP {totalAmount}</b>
      </p>

      <h3>My Expenses</h3>

      <table class="expense">
        <tbody>
          {expense.map((t) => (
            <tr key={t.id}>
              <td>{t.description}</td>
              <td className={t.amount > 100 ? "high-amount" : ""}>{t.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
