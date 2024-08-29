import React from 'react';
import { ThemeContext } from "../../../context/ThemeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import './FinancialDeadlines.scss';

const FinancialDeadlines = () => {
  const deadlines = [
    { id: 1, type: 'Tax Filing', date: '2024-08-25' },
    { id: 2, type: 'Payroll', date: '2024-08-30' },
    { id: 3, type: 'Invoice Due', date: '2024-08-20' },
  ];

  return (
    <section className="financial-deadlines">
      <h4>Upcoming Financial Deadlines</h4>
      <ul>
        {deadlines.map(deadline => (
          <li key={deadline.id}>
            <span>{deadline.type}</span>
            <span>{deadline.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FinancialDeadlines;
