import React, { useState } from "react";

function AddTransactionForm({ postTransaction }) {
  // Use state to track input values reliably
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function submitForm(e) {
    e.preventDefault();
    // Pass the formData state to the post function
    postTransaction(formData);
    // Reset form after submission
    setFormData({ date: "", description: "", category: "", amount: "" });
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={submitForm}>
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={formData.amount} onChange={handleChange} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;