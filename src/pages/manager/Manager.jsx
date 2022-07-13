import React from "react";
import Cards from "../../components/cards/Cards";
import Header from "../../components/header/Header";

function Manager() {
  const employee = [
    {
      id: 1,
      employeeId: "",
      employeeName: "",
      button: "View profile",
      button2: "View Employees",
    },
    {
      id: 2,
      employeeId: "",
      employeeName: "",
      button: "View profile",
      button2: "View Employees",
    },
  ];
  return (
    <>
      <Header type="manager" />
      {employee.map((employee) => (
        <Cards key={employee.id} data={employee} type="manager" />
      ))}
    </>
  );
}

export default Manager;
