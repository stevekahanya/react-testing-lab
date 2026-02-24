import React from "react";

function Transaction({ transaction }) {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        {/* Empty cell or a delete button to match the header */}
        <button className="ui mini red button">Delete</button>
      </td>
    </tr>
  );
}

export default Transaction;