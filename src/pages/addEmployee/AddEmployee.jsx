import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FormInputs } from "../../components/formInputs/FormInputs";

import ApiService from "../../services/ApiService";

import "./addEmployee.css";

const AddEmployee = () => {
  const [data, setData] = useState({});
  const [status, setStatus] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    // setData((prevState) => ({
    //   ...prevState,
    //   [name]: value,
    // }));
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
      id: "employeeName",
      title: "Employee name",
      name: "firstName",
      type: "text",
      placeholder: "Enter Employee name",
      required: true,
      defaultValue: data.employeeName,
      handleChange: handleChange,
    },
    {
      id: "employeeId",
      title: "Employee Id",
      name: "employeeId",
      type: "text",
      placeholder: "Enter Employee Id",
      required: true,
      defaultValue: data.employeeId,
      handleChange: handleChange,
    },
    {
      id: "email",
      title: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      required: true,
      defaultValue: data.email,
      handleChange: handleChange,
    },

    {
      id: "phoneNo",
      title: "Phone Number",
      name: "phoneNo",
      type: "tel",
      placeholder: "Enter Phone Number",
      required: true,
      defaultValue: data.phoneNo,
      handleChange: handleChange,
    },

    {
      id: "Location",
      title: "Location",
      name: "location",
      type: "text",
      placeholder: "Enter Location",
      required: true,
      defaultValue: data.location,
      handleChange: handleChange,
    },
    {
      id: "i_c",
      title: "I/C",
      name: "i_c",
      type: "text",
      placeholder: "Enter I/C",
      required: true,
      defaultValue: data.i_c,
      handleChange: handleChange,
    },
    {
      id: "status",
      title: "Status",
      name: "status",
      type: "text",
      placeholder: "Enter Status",
      required: true,
      defaultValue: data.status,
      handleChange: handleChange,
    },
    {
      id: "Position",
      title: "Position",
      name: "position",
      type: "text",
      placeholder: "Enter Position",
      required: true,
      defaultValue: data.position,
      handleChange: handleChange,
    },
    {
      id: "department",
      title: "Department",
      name: "department",
      type: "text",
      placeholder: "Enter Department",
      required: true,
      defaultValue: data.department,
      handleChange: handleChange,
    },
    {
      id: "partice",
      title: "Partice",
      name: "partice",
      type: "text",
      placeholder: "Enter Partice",
      required: true,
      defaultValue: data.partice,
      handleChange: handleChange,
    },
    {
      id: "hrId",
      title: "HR Id",
      name: "hrId",
      type: "text",
      placeholder: "Enter HR Id",
      required: true,
      defaultValue: data.hrId,
      handleChange: handleChange,
    },
    {
      id: "employeeType",
      title: "Employee Type",
      name: "employeeType",
      type: "text",
      placeholder: "Enter Employee Type",
      required: true,
      defaultValue: data.employeeType,
      handleChange: handleChange,
    },
    {
      id: "SupervisorId",
      title: "Supervisor Id",
      name: "supervisorId",
      type: "text",
      placeholder: "Enter Supervisor Id",
      required: true,
      defaultValue: data.supervisorId,
      handleChange: handleChange,
    },
    {
      id: "country",
      title: "Country",
      name: "country",
      type: "text",
      placeholder: "Enter Country",
      required: true,
      defaultValue: data.country,
      handleChange: handleChange,
    },
    {
      id: "state",
      title: "State",
      name: "state",
      type: "text",
      placeholder: "Enter State",
      required: true,
      defaultValue: data.state,
      handleChange: handleChange,
    },
    {
      id: "pinCode",
      title: "pinCode",
      name: "pinCode",
      type: "number",
      placeholder: "Enter pinCode",
      required: true,
      defaultValue: data.pinCode,
      handleChange: handleChange,
    },
    {
      id: "city",
      title: "City",
      name: "city",
      type: "text",
      placeholder: "Enter City",
      required: true,
      defaultValue: data.city,
      handleChange: handleChange,
    },
    {
      id: "Street",
      title: "Street",
      name: "street",
      type: "text",
      placeholder: "Enter Street",
      required: true,
      defaultValue: data.street,
      handleChange: handleChange,
    },
    {
      id: "HouseNo",
      title: "HouseNo",
      name: "houseNo",
      type: "text",
      placeholder: "Enter HouseNo",
      required: true,
      defaultValue: data.houseNo,
      handleChange: handleChange,
    },
    {
      id: "addressType",
      title: "Address Type",
      name: "addressType",
      type: "text",
      placeholder: "Enter Address Type",
      required: true,
      defaultValue: data.addressType,
      handleChange: handleChange,
    },

    {
      id: "cubicalCost",
      title: "Cubical Cost",
      name: "cubicalCost",
      type: "number",
      placeholder: "Enter Cubical Cost",
      required: true,
      defaultValue: data.cubicalCost,
      handleChange: handleChange,
    },
    {
      id: "TransportCost",
      title: "Transport Cost",
      name: "transportCost",
      type: "number",
      placeholder: "Enter Transport Cost",
      required: true,
      defaultValue: data.transportCost,
      handleChange: handleChange,
    },
    {
      id: "foodCost",
      title: "Food Cost",
      name: "foodCost",
      type: "number",
      placeholder: "Enter Food Cost",
      required: true,
      defaultValue: data.foodCost,
      handleChange: handleChange,
    },
    {
      id: "salary",
      title: "Salary",
      name: "salary",
      type: "number",
      placeholder: "Enter Salary",
      required: true,
      defaultValue: data.salary,
      handleChange: handleChange,
    },
  ];
  return (
    <>
      <div id="add-employee" className="container-sm ">
        <h1 className="title text-center">Employee profile</h1>

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
          <div className="form">
            <FormInputs
              key="joiningDate"
              id="joiningDate"
              title="Joining Date"
              name="joiningDate"
              type="date"
              placeholder="Enter Joining Date"
              required={true}
              defaultValue={data.joiningDate}
              handleChange={handleChange}
            />
            <FormInputs
              key="dob"
              id="dob"
              title="Date of Birth"
              name="dob"
              type="date"
              placeholder="Enter Date of Birth"
              required={true}
              defaultValue={data.dob}
              handleChange={handleChange}
            />
            <Form.Group className="my-4 checkbox">
              <Form.Label>Gender : </Form.Label>{" "}
              <Form.Check
                required
                inline
                label="Male"
                name="gender"
                type="radio"
                defaultValue={data.gender}
                onChange={(e) => {
                  data.gender = "Male";
                }}
              />
              <Form.Check
                inline
                label="Female"
                name="gender"
                type="radio"
                defaultValue={data.gender}
                onChange={(e) => {
                  data.gender = "Female";
                }}
              />
            </Form.Group>
          </div>
          <Button className="btn-signup px-2" type="submit">
            Submit
          </Button>{" "}
          <Button as={Link} to="/dashboard" variant="danger" className="px-2">
            Cancel
          </Button>
          {/* </Col> */}
          {status && (
            <p className="text-success mb-1">
              Please wait while we are processing your request.
            </p>
          )}
        </Form>
      </div>
    </>
  );
};

export default AddEmployee;
