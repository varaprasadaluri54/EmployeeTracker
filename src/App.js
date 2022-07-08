// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import AddEmployee from "./pages/addEmployee/AddEmployee";
import PrivateRoutes from "./routes/PrivateRoutes";
import PromoteEmployee from "./pages/promoteEmployee/PromoteEmployee";
import ExitEmployee from "./pages/exitEmployee/ExitEmployee";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoutes>
                <Dashboard />
              </PrivateRoutes>
            }
          />
          <Route
            path="/addEmployee"
            element={
              <PrivateRoutes>
                <AddEmployee />
              </PrivateRoutes>
            }
          />
          <Route
            path="/promoteEmployee"
            element={
              <PrivateRoutes>
                <PromoteEmployee />
              </PrivateRoutes>
            }
          />
          <Route
            path="/exitEmployee"
            element={
              <PrivateRoutes>
                <ExitEmployee />
              </PrivateRoutes>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
