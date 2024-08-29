import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./project_department/context/ThemeContext.jsx";
import { SidebarProvider } from "./project_department/context/SidebarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <ThemeProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </ThemeProvider>
);
