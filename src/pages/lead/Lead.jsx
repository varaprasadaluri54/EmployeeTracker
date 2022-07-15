import React from "react";
import Cards from "../../components/cards/Cards";
import Header from "../../components/header/Header";
import "./lead.css";
function Lead() {
  const employee = [
    {
      id: 1,
      employeeId: "",
      employeeName: "",
      button: "View profile",
    },
    {
      id: 2,
      employeeId: "",
      employeeName: "",
      button: "View profile",
    },
    {
      id: 3,
      employeeId: "",
      employeeName: "",
      button: "View profile",
    },
    {
      id: 4,
      employeeId: "",
      employeeName: "",
      button: "View profile",
    },
  ];
  return (
    <>
      <Header type="lead" />
      <div className="lead">
        {employee.map((employee) => (
          <Cards key={employee.id} data={employee} type="lead" />
        ))}
      </div>
    </>
  );
}

export default Lead;
