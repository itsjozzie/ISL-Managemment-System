import React from 'react';
import './OutstandingInvoices.scss';

const OutstandingInvoices = () => {
  const invoices = [
    { id: 1, customer: 'John Doe', amount: 'Tzs 100,000/=', dueDate: '2024-08-15' },
    { id: 2, customer: 'Jane Smith', amount: 'Tzs 150,000/=', dueDate: '2024-08-20' },
  ];

  return (
    <section className="outstanding-invoices">
      <h4>Outstanding Invoices</h4>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice.id}>
            <span>{invoice.customer}</span>
            <span>{invoice.amount}</span>
            <span>{invoice.dueDate}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OutstandingInvoices;
