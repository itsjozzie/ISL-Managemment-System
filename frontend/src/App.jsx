import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeContext } from "./project_department/context/ThemeContext";
import { DARK_THEME } from "./project_department/constants/themeConstants";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import './App.scss';

// Import layouts and screens for all departments
import BaseLayout from "./project_department/layout/BaseLayout";
import FinanceBaseLayout from "./finance_department/layout/FinanceBaseLayout";
import SalesBaseLayout from "./sales_department/layout/SalesBaseLayout";
import HRBaseLayout from "./HR_department/layout/HRBaseLayout";
import OperationBaseLayout from "./operation_department/layout/OperationBaseLayout";
import TechnicalBaseLayout from "./technical_department/layout/TechnicalBaseLayout";
import BoardRoomBaseLayout from "./boardroom/layout/BoardRoomBaseLayout";
import PageNotFound from "./project_department/screens/error/PageNotFound";
import UnauthorizedPage from "./project_department/screens/error/UnauthorizedPage";
import DashboardScreen from "./project_department/screens/dashboard/DashboardScreen";
import FinanceDashboard from "./finance_department/screens/dashboard/FinanceDashboard";
import HRDashboard from "./HR_department/screens/dashboard/HRDashboard";
import SalesDashboard from "./sales_department/screens/dashboard/SalesDashboard";
import OperationDashboard from "./operation_department/screens/dashboard/DashboardScreen";
import TechnicalDashboard from "./technical_department/screens/dashboard/DashboardScreen";
import BoardRoomDashboard from "./boardroom/screens/dashboard/BoardRoomDashboard";

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
import Boardroom from "./finance_department/components/boardroom/Boardroom";
import AddRequest from "./finance_department/components/boardroom/AddRequest";
import ViewRequest from "./finance_department/components/boardroom/ViewRequest";
import BookingCalendar from "./finance_department/components/boardroom/BookingCalender";
import BookingStatus from "./finance_department/components/boardroom/BookingStatus";
import BoardroomList from "./finance_department/components/boardroom/BoardroomList";
import FinanceNotifications from "./finance_department/components/boardroom/Notifications";

// Sales department components 
import SalesAccounts from "./sales_department/components/accounts/Accounts";
import SalesAccountsPayable from "./sales_department/components/accounts/AccountsPayable";
import SalesAccountsReceivable from "./sales_department/components/accounts/AccountsReceivable";
import SalesBudgets from "./sales_department/components/budgets/Budgets";
import SalesCurrentBudget from "./sales_department/components/budgets/CurrentBudget";
import SalesBudgetRequests from "./sales_department/components/budgets/BudgetRequests";
import SalesReports from "./sales_department/components/reports/Reports";
import SalesFinancialReports from "./sales_department/components/reports/FinancialReports";
import SalesExpenseReports from "./sales_department/components/reports/ExpenseReports";
import SalesRevenueAnalysis from "./sales_department/components/reports/RevenueAnalysis";

// BoardRoom components
import Bookings from "./boardroom/components/booking/Bookings";
import UpcomingBookings from "./boardroom/components/booking/UpcomingBookings";
import BookingHistory from "./boardroom/components/booking/BookingHistory";
import BookingForm from "./boardroom/components/booking/BookingForm";
import Managements from "./boardroom/components/management/Managements"
import UserManagement from "./boardroom/components/management/UserManagement";
import RequestManagement from "./boardroom/components/management/RequestManagement";
import Notifications from "./boardroom/components/management/Notifications";

// Authentication components
import LoginPage from "./login/LoginPage";
import RegisterPage from "./login/RegisterPage";
import LogoutPage from "./login/LogoutPage";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isAuthenticated = !!localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  useEffect(() => {
    document.body.classList.toggle("dark-mode", theme === DARK_THEME);
  }, [theme]);

  const ProtectedRoute = ({ element }) => (
    isAuthenticated ? element : <Navigate to="/login" />
  );

  const RedirectToDashboard = () => {
    switch (userRole) {
      case 'finance':
        return <Navigate to="/finance/dashboard" />;
      case 'hr':
        return <Navigate to="/hr/dashboard" />;
      case 'sales':
        return <Navigate to="/sales/dashboard" />;
      case 'operation':
        return <Navigate to="/operation/dashboard" />;
      case 'technical':
        return <Navigate to="/technical/dashboard" />;
      case 'project':
        return <Navigate to="/project/dashboard" />;
      case 'admin':
        return <Navigate to="/boardroom/dashboard" />; 
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
          <Route path="project/*" element={<ProtectedRoute element={<BaseLayout />} />}>
            <Route path="dashboard" element={<DashboardScreen />} />
            <Route path="projects/*" element={<Projects />}>
              <Route path="all" element={<AllProjects />} />
              <Route path="add" element={<AddProject />} />
              <Route path="update/:id" element={<UpdateProject />} />
              <Route path=":id" element={<ProjectDetail />} />
              <Route path="reports" element={<ProjectReports />} />
            </Route>
            <Route path="personnel/*" element={<Personnel />}>
              <Route path="all" element={<AllPersonnel />} />
              <Route path="add" element={<AddPersonnel />} />
              <Route path="assignments" element={<Assignments />} />
              <Route path="details/:id" element={<PersonnelDetails />} />
              <Route path="update/:id" element={<UpdatePersonnel />} />
            </Route>
            <Route path="clients/*" element={<Clients />}>
              <Route path="all" element={<Clients />} />
              <Route path="add" element={<AddClient />} />
              <Route path="details/:id" element={<ClientDetail />} />
              <Route path="interactions" element={<ClientInteractions />} />
            </Route>
          </Route>

          {/* Routes for Finance Department */}
          <Route path="finance/*" element={<ProtectedRoute element={<FinanceBaseLayout />} />}>
            <Route path="dashboard" element={<FinanceDashboard />} />
            <Route path="accounts/*" element={<Accounts />}>
              <Route path="payable" element={<AccountsPayable />} />
              <Route path="receivable" element={<AccountsReceivable />} />
            </Route>
            <Route path="budgets/*" element={<Budgets />}>
              <Route path="current" element={<CurrentBudget />} />
              <Route path="requests" element={<BudgetRequests />} />
            </Route>
            <Route path="reports/*" element={<Reports />}>
              <Route path="financial" element={<FinancialReports />} />
              <Route path="expense" element={<ExpenseReports />} />
              <Route path="revenue" element={<RevenueAnalysis />} />
            </Route>
            <Route path="boardroom/*" element={<Boardroom />}>
              <Route path="add-request" element={<AddRequest />} />
              <Route path="view-request" element={<ViewRequest />} />
              <Route path="booking-calendar" element={<BookingCalendar />} />
              <Route path="booking-status" element={<BookingStatus />} />
              <Route path="boardroom-list" element={<BoardroomList />} />
              <Route path="notifications" element={<FinanceNotifications />} />
            </Route>
          </Route>

          {/* Routes for HR Department */}
          <Route path="hr/*" element={<ProtectedRoute element={<HRBaseLayout />} />}>
            <Route path="dashboard" element={<HRDashboard />} />
          </Route>

          {/* Routes for Sales Department */}
          <Route path="sales/*" element={<ProtectedRoute element={<SalesBaseLayout />} />}>
            <Route path="dashboard" element={<SalesDashboard />} />
            <Route path="accounts/*" element={<SalesAccounts />}>
              <Route path="payable" element={<SalesAccountsPayable />} />
              <Route path="receivable" element={<SalesAccountsReceivable />} />
            </Route>
            <Route path="budgets/*" element={<SalesBudgets />}>
              <Route path="current" element={<SalesCurrentBudget />} />
              <Route path="requests" element={<SalesBudgetRequests />} />
            </Route>
            <Route path="reports/*" element={<SalesReports />}>
              <Route path="financial" element={<SalesFinancialReports />} />
              <Route path="expense" element={<SalesExpenseReports />} />
              <Route path="revenue" element={<SalesRevenueAnalysis />} />
            </Route>
          </Route>

          {/* Routes for Operations Department */}
          <Route path="operation/*" element={<ProtectedRoute element={<OperationBaseLayout />} />}>
            <Route path="dashboard" element={<OperationDashboard />} />
          </Route>

          {/* Routes for Technical Department */}
          <Route path="technical/*" element={<ProtectedRoute element={<TechnicalBaseLayout />} />}>
            <Route path="dashboard" element={<TechnicalDashboard />} />
          </Route>

          {/* Routes for BoardRoom Department */}
          <Route path="boardroom/*" element={<ProtectedRoute element={<BoardRoomBaseLayout />} />}>
            <Route path="dashboard" element={<BoardRoomDashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="managements/*" element={<Managements />}>
              <Route path="user" element={<UserManagement />} />
              <Route path="request" element={<RequestManagement />} />
              <Route path="notification" element={<Notifications />} />
            </Route>
          </Route>

          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>

      <div className="theme-toggle">
        <img
          src={theme === DARK_THEME ? SunIcon : MoonIcon}
          alt="Theme Toggle Icon"
          onClick={toggleTheme}
        />
      </div>
    </Router>
  );
}

export default App;
