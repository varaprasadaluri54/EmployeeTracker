// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import AddEmployee from "./pages/addEmployee/AddEmployee";
import PrivateRoutes from "./routes/PrivateRoutes";
import PromoteEmployee from "./pages/promoteEmployee/PromoteEmployee";
import ExitEmployee from "./pages/exitEmployee/ExitEmployee";
import Finance from "./components/finance/Finance";
import ClientDomestic from "./pages/clientDomestic/ClientDomestic";
import InternalDomestic from "./pages/internalDomestic/InternalDomestic";
import ClientInternational from "./pages/clientinternational/ClientInternational";
import InternalInternational from "./pages/internalInternational/InternalInternational";
import MD from "./pages/md/MD";
import Manager from "./pages/manager/Manager";
import AddClientDetails from "./pages/addClientDetails/AddClientDetails";
import Lead from "./pages/lead/Lead";

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
          <Route
            path="/finance"
            element={
              // <PrivateRoutes>
              <Finance />
              // </PrivateRoutes>
            }
          />
          <Route
            path="/clientDomestic"
            element={
              // <PrivateRoutes>
              <ClientDomestic />
              // </PrivateRoutes>
            }
          />
          <Route
            path="/internalDomestic"
            element={
              // <PrivateRoutes>
              <InternalDomestic />
              // </PrivateRoutes>
            }
          />
          <Route
            path="/clientInternational"
            element={
              // <PrivateRoutes>
              <ClientInternational />
              // </PrivateRoutes>
            }
          />
          <Route
            path="/internalInternational"
            element={
              // <PrivateRoutes>
              <InternalInternational />
              // </PrivateRoutes>
            }
          />
          <Route
            path="/md"
            element={
              // <PrivateRoutes>
              <MD />
              // </PrivateRoutes>
            }
          />
          <Route
            path="/manager"
            element={
              // <PrivateRoutes>
              <Manager />
              // </PrivateRoutes>
            }
          />
          <Route
            path="/addClientDetails"
            element={
              // <PrivateRoutes>
              <AddClientDetails />
              // </PrivateRoutes>
            }
          />
          <Route
            path="/lead"
            element={
              // <PrivateRoutes>
              <Lead />
              // </PrivateRoutes>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
