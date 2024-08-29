import React from 'react';
import Revenue from './Revenue';
import Expenses from './Expenses';
import ProfitLoss from './ProfitLoss';
import CashFlowStatus from './CashFlowStatus';
import BudgetVsActual from './BudgetVsActual';
import './KeyFinancialMetrics.scss';

const KeyFinancialMetrics = () => {
  return (
    <section className="key-financial-metrics">
      <Revenue />
      <Expenses />
      <ProfitLoss />
      <CashFlowStatus />
      <BudgetVsActual />
    </section>
  );
};

export default KeyFinancialMetrics;
