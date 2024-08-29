import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeContext } from "./project_department/context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./project_department/constants/themeConstants";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import './App.scss';

// Import layouts and screens for all departments
import BaseLayout from "./project_department/layout/BaseLayout";
import FinanceBaseLayout from "./finance_department/layout/FinanceBaseLayout";
import PageNotFound from "./project_department/screens/error/PageNotFound";
import UnauthorizedPage from "./project_department/screens/error/UnauthorizedPage";
import DashboardScreen from "./project_department/screens/dashboard/DashboardScreen";
import FinanceDashboard from "./finance_department/screens/dashboard/FinanceDashboard";
import HRDashboard from "./HR_department/screens/dashboard/HRDashboard";
import SalesDashboard from "./sales_department/screens/dashboard/DashboardScreen";
import OperationDashboard from "./operation_department/screens/dashboard/DashboardScreen";
import TechnicalDashboard from "./technical_department/screens/dashboard/DashboardScreen";

// Project department components
import Projects from "./project_department/components/projects/Projects";
import AllProjects from "./project_department/components/projects/AllProjects";
import AddProject from "./project_department/components/projects/AddNewProject";
import UpdateProject from "./project_department/components/projects/UpdateProject";
import ProjectDetail from "./project_department/components/projects/ProjectDetail";
import ProjectReports from "./project_department/components/projects/ProjectReports";

// Personnel components for project department
import Personnel from "./project_department/components/personnel/Personnel";
import AllPersonnel from "./project_department/components/personnel/AllPersonnel";
import AddPersonnel from "./project_department/components/personnel/AddPersonnel";
import Assignments from "./project_department/components/personnel/Assignments";
import PersonnelDetails from "./project_department/components/personnel/PersonnelDetails";
import UpdatePersonnel from "./project_department/components/personnel/UpdatePersonnel";

// Client components for project department
import Clients from "./project_department/components/clients/ClientList";
import AddClient from "./project_department/components/clients/AddClient";
import ClientDetail from "./project_department/components/clients/ClientDetail";
import ClientInteractions from "./project_department/components/clients/ClientInteractions";

// Authentication components
import LoginPage from "./login/LoginPage";
import RegisterPage from "./login/RegisterPage";
import LogoutPage from "./login/LogoutPage";

// Finance department components
import Accounts from "./finance_department/components/accounts/Accounts";
import AccountsPayable from "./finance_department/components/accounts/AccountsPayable";
import AccountsReceivable from "./finance_department/components/accounts/AccountsReceivable";
import Budgets from "./finance_department/components/budgets/Budgets";
import CurrentBudget from "./finance_department/components/budgets/CurrentBudget";
import BudgetRequests from "./finance_department/components/budgets/BudgetRequests";
import Reports from "./finance_department/components/reports/Reports";
import FinancialReports from "./finance_department/components/reports/FinancialReports";
import ExpenseReports from "./finance_department/components/reports/ExpenseReports";
import RevenueAnalysis from "./finance_department/components/reports/RevenueAnalysis";
import Compliance from "./finance_department/components/compliance/Compliance";
import Audit from "./finance_department/components/compliance/Audit";
import ComplianceOverview from "./finance_department/components/compliance/ComplianceOverview";
import Analytics from "./finance_department/components/analytics/Anallytics";
import KPIs from "./finance_department/components/analytics/KPIs";
import Trends from "./finance_department/components/analytics/Trends";
import Settings from "./finance_department/components/settings/Settings";
import FinancialSettings from "./finance_department/components/settings/FinancialSettings";
import UserManagement from "./finance_department/components/settings/UserManagement";
import Integrations from "./finance_department/components/settings/Integrations";
import Support from "./finance_department/components/support/Support";
import HelpCenter from "./finance_department/components/support/HelpCenter";
import ContactSupport from "./finance_department/components/support/ContactSupport";
import ViewProfile from "./finance_department/components/profile/ViewProfile";
import EditProfile from "./finance_department/components/profile/EditProfile";
import Profile from "./finance_department/components/profile/Profile";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isAuthenticated = !!localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  const ProtectedRoute = ({ element }) => (
    isAuthenticated ? element : <Navigate to="/login" />
  );

  const RedirectToDashboard = () => {
    switch (userRole) {
      case 'finance':
        return <Navigate to="/finance/dashboard" />;
      case 'hr':
        return <Navigate to="/hr-dashboard" />;
      case 'sales':
        return <Navigate to="/sales-dashboard" />;
      case 'operation':
        return <Navigate to="/operation-dashboard" />;
      case 'technical':
        return <Navigate to="/technical-dashboard" />;
      case 'project':
        return <Navigate to="/project-dashboard" />;
      default:
        return <Navigate to="/unauthorized" />;
    }
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/logout" element={<LogoutPage />} />

        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute element={<BaseLayout />} />}>
          <Route index element={<RedirectToDashboard />} />

          {/* Routes for Project Department */}
          <Route path="/project-dashboard" element={<DashboardScreen />} />
          <Route path="/projects/*" element={<Projects />}>
            <Route path="all" element={<AllProjects />} />
            <Route path="add" element={<AddProject />} />
            <Route path="update/:id" element={<UpdateProject />} />
            <Route path=":id" element={<ProjectDetail />} />
            <Route path="reports" element={<ProjectReports />} />
          </Route>
          <Route path="/personnel/*" element={<Personnel />}>
            <Route path="all" element={<AllPersonnel />} />
            <Route path="add" element={<AddPersonnel />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="details/:id" element={<PersonnelDetails />} />
            <Route path="update/:id" element={<UpdatePersonnel />} />
          </Route>
          <Route path="/clients/*" element={<Clients />}>
            <Route path="all" element={<Clients />} />
            <Route path="add" element={<AddClient />} />
            <Route path="details/:id" element={<ClientDetail />} />
            <Route path="interactions" element={<ClientInteractions />} />
          </Route>

          {/* Routes for Finance Department */}
          <Route path="/finance" element={<ProtectedRoute element={<FinanceBaseLayout />} />}>
            <Route index element={<RedirectToDashboard />} />
            <Route path="dashboard" element={<FinanceDashboard />} />

            {/* Accounts */}
            <Route path="accounts/*" element={<Accounts />}>
              <Route path="payable" element={<AccountsPayable />} />
              <Route path="receivable" element={<AccountsReceivable />} />
            </Route>

            {/* Budgets */}
            <Route path="budgets/*" element={<Budgets />}>
              <Route path="current" element={<CurrentBudget />} />
              <Route path="requests" element={<BudgetRequests />} />
            </Route>

            {/* Reports */}
            <Route path="reports/*" element={<Reports />}>
              <Route path="financial" element={<FinancialReports />} />
              <Route path="expense" element={<ExpenseReports />} />
              <Route path="revenue" element={<RevenueAnalysis />} />
            </Route>

            {/* Compliance */}
            <Route path="compliance/*" element={<Compliance />}>
              <Route path="audit" element={<Audit />} />
              <Route path="overview" element={<ComplianceOverview />} />
            </Route>

            {/* Analytics */}
            <Route path="analytics/*" element={<Analytics />}>
              <Route path="kpis" element={<KPIs />} />
              <Route path="trends" element={<Trends />} />
            </Route>

            {/* Settings */}
            <Route path="settings/*" element={<Settings />}>
              <Route path="financial" element={<FinancialSettings />} />
              <Route path="user-management" element={<UserManagement />} />
              <Route path="integrations" element={<Integrations />} />
            </Route>

            {/* Support */}
            <Route path="support/*" element={<Support />}>
              <Route path="help-center" element={<HelpCenter />} />
              <Route path="contact" element={<ContactSupport />} />
            </Route>

            {/* Profile */}
            <Route path="profile/*" element={<Profile />}>
              <Route path="view" element={<ViewProfile />} />
              <Route path="edit" element={<EditProfile />} />
            </Route>
          </Route>

          {/* Routes for HR Department */}
          <Route path="/hr-dashboard" element={<HRDashboard />} />

          {/* Routes for Sales Department */}
          <Route path="/sales-dashboard" element={<SalesDashboard />} />

          {/* Routes for Operations Department */}
          <Route path="/operation-dashboard" element={<OperationDashboard />} />

          {/* Routes for Technical Department */}
          <Route path="/technical-dashboard" element={<TechnicalDashboard />} />

          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>

      {/* Theme Toggle */}
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {theme === DARK_THEME ? (
            <img src={SunIcon} alt="Light Mode" />
          ) : (
            <img src={MoonIcon} alt="Dark Mode" />
          )}
        </button>
      </div>
    </Router>
  );
}

export default App;
