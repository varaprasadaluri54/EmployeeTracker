import React from "react";
import Cards from "../../components/cards/Cards";
import Header from "../../components/header/Header";
function MD() {
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
      <Header type="md" />
      {employee.map((employee) => (
        <Cards key={employee.id} data={employee} type="md" />
      ))}
    </>
  );
}

export default MD;
