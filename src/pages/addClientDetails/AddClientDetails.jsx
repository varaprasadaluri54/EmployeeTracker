import React, { useState } from "react";
import Header from "../../components/header/Header";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormInputs } from "../../components/formInputs/FormInputs";

import ApiService from "../../services/ApiService";

function AddClientDetails() {
  const [data, setData] = useState({});
  const [status, setStatus] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  // eslint-disable-next-line  no-unused-vars
  const [errors, setErrors] = useState(false);
  // eslint-disable-next-line
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(true);
    // setErrors(false);
    ApiService.insertEmployee(data)
      .then((res) => {
        console.log(res.data);
        alert("successfull");
        navigate("/dashboard");
        setStatus(false);
      })
      .catch((error) => {
        console.log(error);
        setStatus(false);
        setErrors(false);
      });
  };
  const formData = [
    {
      id: "employeeID",
      title: "Employee ID",
      name: "employeeID",
      type: "text",
      placeholder: "Enter Employee ID",
      required: true,
      defaultValue: data.employeeID,
      handleChange: handleChange,
    },
    {
      id: "clientName",
      title: "Client Name",
      name: "clientName",
      type: "text",
      placeholder: "Enter client name",
      required: true,
      defaultValue: data.clientName,
      handleChange: handleChange,
    },
    {
      id: "salaryPerMonth",
      title: "Salary per month",
      name: "salaryPerMonth",
      type: "text",
      placeholder: "Enter Salary per month",
      required: true,
      defaultValue: data.salaryPerMonth,
      handleChange: handleChange,
    },
    {
      id: "PosDate",
      title: "POS Date",
      name: "posDate",
      type: "date",
      placeholder: "Enter POS Date",
      required: true,
      defaultValue: data.posDate,
      handleChange: handleChange,
    },
    {
      id: "PoeDate",
      title: "POE Date",
      name: "poeDate",
      type: "date",
      placeholder: "Enter POE Date",
      required: true,
      defaultValue: data.poeDate,
      handleChange: handleChange,
    },
  ];
  return (
    <>
      <Header type="manager" />
      <div id="add-employee" className="container-sm ">
        <h1 className="title text-center">Add Client Details</h1>

        <Form onSubmit={handleSubmit}>
          <h4>Employee Details</h4>
          <hr></hr>
          <div className="form">
            {formData.map((item, index) => (
              <FormInputs
                key={item.id}
                id={item.id}
                title={item.title}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                required={item.required}
                defaultValue={item.defaultValue}
                handleChange={item.handleChange}
              />
            ))}
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddClientDetails;
