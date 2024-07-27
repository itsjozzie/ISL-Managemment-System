import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import DashboardScreen from "./screens/dashboard/DashboardScreen";
import PageNotFound from "./screens/error/PageNotFound";
import Projects from "./components/projects/Projects";
import AllProjects from "./components/projects/AllProjects";
import AddProject from "./components/projects/AddNewProject";
import ProjectReports from "./components/projects/ProjectReports";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import LogoutPage from "./components/LogoutPage";
import Personnel from "./components/personnel/Personnel";
import AllPersonnel from "./components/personnel/AllPersonnel";
import AddPersonnel from "./components/personnel/AddPersonnel";
import Assignments from "./components/personnel/PersonnelAssignments";
import PersonnelDetails from "./components/personnel/PersonnelDetails";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isAuthenticated = !!localStorage.getItem('token');

  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="*" element={<PageNotFound />} />

       
        {isAuthenticated ? (
          <>
            <Route element={<BaseLayout />}>
              <Route path="/" element={<DashboardScreen />} />
              <Route path="/projects/*" element={<Projects />}>
                <Route path="all" element={<AllProjects />} />
                <Route path="add" element={<AddProject />} />
                <Route path="reports" element={<ProjectReports />} />
              </Route>
              <Route path="/personnel/*" element={<Personnel />}>
                <Route path="all" element={<AllPersonnel />} />
                <Route path="add" element={<AddPersonnel />} />
                <Route path="assignments" element={<Assignments />} />
                <Route path=":id" element={<PersonnelDetails />} />
              </Route>
            </Route>
          </>
        ) : (
          <Route path="/" element={<Navigate to="/login" />} />
        )}
      </Routes>

      <button
        type="button"
        className="theme-toggle-btn"
        onClick={toggleTheme}
      >
        <img
          className="theme-icon"
          src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          alt="Toggle Theme"
        />
      </button>
    </Router>
  );
}

export default App;
