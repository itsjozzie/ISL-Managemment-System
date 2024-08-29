import React from 'react';
import './RecentTransactions.scss';

const RecentTransactions = () => {
  const transactions = [
    { id: 1, type: 'Invoice', amount: 'Tzs 200,000/=', date: '2024-08-01' },
    { id: 2, type: 'Payment', amount: 'Tzs 150,000/=', date: '2024-08-03' },
    { id: 3, type: 'Expense', amount: 'Tzs 50,000/=', date: '2024-08-05' },
  ];

  return (
    <section className="recent-transactions">
      <h4>Recent Transactions</h4>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            <span>{transaction.type}</span>
            <span>{transaction.amount}</span>
            <span>{transaction.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentTransactions;
