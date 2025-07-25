import React, { useState, useEffect } from "react";
import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Scenes/global/Topbar";
import Dashboard from "./Scenes/dashboard";
import Sidebar from "./Scenes/global/Sidebar";
import Team from "./Scenes/team";
import Contacts from "./Scenes/contacts";
import Invoices from "./Scenes/invoices/invoices";
import Form from "./Scenes/forms/index";
import Calendar from "./Scenes/calendar";
import FAQ from "./Scenes/faq";
import Bar from "./Scenes/bar";
import Pie from "./Scenes/pie";
import Line from "./Scenes/line";
import Geography from "./Scenes/geography";

const SIDEBAR_WIDTH = 270;
const SIDEBAR_COLLAPSED_WIDTH = 80;
const BREAKPOINT = 900; // px

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // ⭐️ Auto-collapse sidebar at or below the breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < BREAKPOINT) {
        setIsSidebarCollapsed(true);
      } else {
        setIsSidebarCollapsed(false);
      }
    };
    // Listen for resize
    window.addEventListener("resize", handleResize);
    handleResize(); // Set on initial render

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex", width: "100%" }}>
          {/* Sidebar always on the left */}
          <Sidebar
            isCollapsed={isSidebarCollapsed}
            setIsCollapsed={setIsSidebarCollapsed}
          />
          {/* Main Content Area */}
          <Box
            component="main"
            className="content"
            sx={{
              flexGrow: 1,
              minHeight: "100vh",
              marginLeft: isSidebarCollapsed
                ? `${SIDEBAR_COLLAPSED_WIDTH}px`
                : `${SIDEBAR_WIDTH}px`,
              transition: "margin-left 0.3s cubic-bezier(.4,0,.2,1)",
            }}
          >
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
