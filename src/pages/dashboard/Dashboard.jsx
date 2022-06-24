import React from "react";
import { useEffect } from "react";
import Cards from "../../components/cards/Cards";
import Header from "../../components/header/Header";
import ApiService from "../../services/ApiService";
import "./dashboard.css";
const Dashboard = () => {
  const [status, setStatus] = React.useState(false);
  const [employees, setEmployees] = React.useState([]);
  useEffect(() => {
    // eslint-disable-line
    ApiService.getAllEmployees()
      .then((res) => {
        // console.log(res.data);
        setEmployees(res.data);
        setStatus(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="cards-all">
        {status
          ? employees.User?.map((data, index) => {
              return <Cards key={index} data={data} />;
            })
          : "Loading..."}
      </div>
    </>
  );
};

export default Dashboard;
