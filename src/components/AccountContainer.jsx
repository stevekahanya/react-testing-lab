import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from "./Sort";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("description"); // New state for sorting

  useEffect(() => {
    fetch("http://localhost:6001/transactions")
      .then((r) => r.json())
      .then((data) => setTransactions(data));
  }, []);

  function postTransaction(newTransaction) {
    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
    })
      .then((r) => r.json())
      .then((data) => setTransactions([...transactions, data]));
  }

  function onSort(value) {
    setSortBy(value);
  }

  // Logic to filter transactions by the search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );

  // Logic to sort the filtered results
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (sortBy === "description") {
      return a.description.localeCompare(b.description);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <Search setSearch={setSearch} />
      <AddTransactionForm postTransaction={postTransaction} />
      <Sort onSort={onSort} />
      <TransactionsList transactions={sortedTransactions} />
    </div>
  );
}

export default AccountContainer;