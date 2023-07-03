const expenses = [
  {
    "id": 1,
    "title": "Rent",
    "amount": 1000
  },
  {
    "id": 2,
    "title": "Groceries",
    "amount": 200
  },
  {
    "id": 3,
    "title": "Utilities",
    "amount": 150
  },
  {
    "id": 4,
    "title": "Transportation",
    "amount": 100
  },
  {
    "id": 5,
    "title": "Entertainment",
    "amount": 50
  }
];

expenses.map((e) => {
  const title = document.createElement("div");
  title.innerHTML = e.title;
  const amount = document.createElement("h4");
  amount.innerHTML = e.amount;

  let expense_div = document.createElement("div");
  expense_div.className = "expense";

  expense_div.appendChild(title);
  expense_div.appendChild(amount);

  document.getElementById("expenses").appendChild(expense_div);
});

let totalAmount = 0;

for (const expense of expenses) {
  totalAmount += expense.amount;
}
const totalAmountElement = document.getElementById("totalAmount");
totalAmountElement.textContent += totalAmount;
console.log("Total amount:", totalAmount);

export { expenses };