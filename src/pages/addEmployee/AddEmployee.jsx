import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import ApiService from "../../services/ApiService";

import "./addEmployee.css";

const AddEmployee = () => {
  const [data, setData] = useState({});

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
    setErrors(false);
    console.log(data);

    ApiService.insertEmployee(data)
      .then((res) => {
        console.log(res.data);
        alert("successfull");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Header />
      <div id="add-employee" className="container-sm ">
        <h1 className="title text-center">Add Employee profile</h1>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <h4>Employee Details</h4>
              <hr></hr>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="firstName">EmployeeID</Form.Label>
                <Form.Control
                  name="employeeId"
                  id="employeeId"
                  required
                  type="text"
                  placeholder="Enter employeeId"
                  defaultValue={data.employeeId}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="lastName">Employee name</Form.Label>
                <Form.Control
                  name="employeeName"
                  id="employeeName"
                  required
                  type="text"
                  placeholder="enter employee name"
                  defaultValue={data.employeeName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="joiningDate">Joining date</Form.Label>
                <Form.Control
                  name="joiningDate"
                  id="joiningDate"
                  required
                  type="date"
                  placeholder="Enter joining Date"
                  defaultValue={data.joiningDate}
                  onChange={handleChange}
                />
              </Form.Group>
              {/* <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  name="email"
                  id="email"
                  required
                  type="email"
                  placeholder="name@gmail.com"
                  defaultValue={data.email}
                  onChange={handleChange}
                />
              </Form.Group> */}
              <Form.Group className="mb-3">
                <Form.Label htmlFor="dateOfBirth">Date of Birth</Form.Label>
                <Form.Control
                  name="dob"
                  id="dateOfBirth"
                  required
                  type="date"
                  defaultValue={data.dob}
                  onChange={handleChange}
                />
              </Form.Group>
              {/* <Form.Group className="mb-3 checkbox">
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
              </Form.Group> */}
              {/* <Form.Group className="mb-3">
                <Form.Label htmlFor="phone number">Phone Number</Form.Label>
                <Form.Control
                  // required
                  id="phone number"
                  type="tel"
                  // pattern="[+91][0-9]{13}"
                  // pattern="[0-9]{10}"
                  message="please enter correct number"
                  placeholder="please enter phone number"
                  name="phoneNo"
                  // placeholder="+919999999999"
                  // pattern="[+91][0-9].{11}"
                  // maxLength={13}
                  title="enter phone number like +919999999999"
                  defaultValue={data.phoneNo}
                  onChange={handleChange}
                />
              </Form.Group> */}
              <Form.Group className="mb-3">
                <Form.Label htmlFor="salary">Salary</Form.Label>
                <Form.Control
                  required
                  id="salary"
                  type="number"
                  placeholder="please enter salary"
                  name="salary"
                  title="enter salary"
                  defaultValue={data.salary}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="practice">Practice</Form.Label>
                <Form.Control
                  required
                  id="practice"
                  type="text"
                  placeholder="please enter practice"
                  name="practice"
                  title="enter salary"
                  defaultValue={data.practice}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="designationAtLs">
                  Designation at Lancesoft
                </Form.Label>
                <Form.Control
                  required
                  id="designationAtLs"
                  type="text"
                  placeholder="please enter designation at Lancesoft"
                  name="designationAtLs"
                  title="enter designation"
                  defaultValue={data.designationAtLs}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <h4>Client Details</h4>
              <hr></hr>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="designationAtClient">
                  Designation at Client
                </Form.Label>
                <Form.Control
                  // required
                  id="designationAtClient"
                  type="text"
                  placeholder="please enter designation at Client"
                  name="clientDetailsOfEmployee.designationAtLs"
                  title="enter designation"
                  defaultValue={
                    data.clientDetailsOfEmployee?.designationAtClient
                  }
                  onChange={(e) => {
                    setData({
                      ...data,
                      clientDetailsOfEmployee: {
                        ...data.clientDetailsOfEmployee,
                        designationAtClient: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="clientName">Client Name</Form.Label>
                <Form.Control
                  // required
                  id="clientName"
                  type="text"
                  placeholder="please enter Client name"
                  name="clientDetailsOfEmployee.clientName"
                  title="enter client name"
                  defaultValue={data.clientDetailsOfEmployee?.clientName}
                  onChange={(e) => {
                    setData({
                      ...data,
                      clientDetailsOfEmployee: {
                        ...data.clientDetailsOfEmployee,
                        clientName: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="clientBilling">Client billing</Form.Label>
                <Form.Control
                  // required
                  id="clientBilling"
                  type="number"
                  placeholder="please enter Client billing"
                  name="clientDetailsOfEmployee.clientBilling"
                  title="enter Client billing"
                  defaultValue={data.clientDetailsOfEmployee?.clientBilling}
                  onChange={(e) => {
                    setData({
                      ...data,
                      clientDetailsOfEmployee: {
                        ...data.clientDetailsOfEmployee,
                        clientBilling: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="poSdate">PO Start date</Form.Label>
                <Form.Control
                  // required
                  id="poSdate"
                  type="date"
                  placeholder="please enter PO Start date"
                  name="clientDetailsOfEmployee.poSdate"
                  title="enter PO Start date"
                  defaultValue={data.clientDetailsOfEmployee?.poSdate}
                  onChange={(e) => {
                    setData({
                      ...data,
                      clientDetailsOfEmployee: {
                        ...data.clientDetailsOfEmployee,
                        poSdate: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="poEdate">PO end date</Form.Label>
                <Form.Control
                  // required
                  id="poEdate"
                  type="date"
                  placeholder="please enter PO end date"
                  name="clientDetailsOfEmployee.poEdate"
                  title="enter PO end date"
                  defaultValue={data.clientDetailsOfEmployee?.poEdate}
                  onChange={(e) => {
                    setData({
                      ...data,
                      clientDetailsOfEmployee: {
                        ...data.clientDetailsOfEmployee,
                        poEdate: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <h4>Bill</h4>
              <hr></hr>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="cubicalCost">Cubical cost</Form.Label>
                <Form.Control
                  required
                  id="cubicalCost"
                  type="number"
                  placeholder="please enter cubical cost"
                  name="bill.cubicalCost"
                  title="enter Cubical cost"
                  defaultValue={data.bill?.cubicalCost}
                  onChange={(e) => {
                    setData({
                      ...data,
                      bill: {
                        ...data.bill,
                        cubicalCost: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="foodCost">Food Cost</Form.Label>
                <Form.Control
                  required
                  id="foodCost"
                  type="number"
                  placeholder="please enter food Cost"
                  name="bill.foodCost"
                  title="enter food Cost"
                  defaultValue={data.bill?.foodCost}
                  onChange={(e) => {
                    setData({
                      ...data,
                      bill: {
                        ...data.bill,
                        foodCost: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="transportCost">Transport Cost</Form.Label>
                <Form.Control
                  required
                  id="transportCost"
                  type="number"
                  placeholder="please enter Transport Cost"
                  name="bill.[0].transportCost"
                  title="enter Transport Cost"
                  defaultValue={data.bill?.transportCost}
                  onChange={(e) => {
                    setData({
                      ...data,
                      bill: {
                        ...data.bill,
                        transportCost: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>
              <Button className="btn-signup" type="submit">
                Add
              </Button>{" "}
              <Button as={Link} to="/dashboard" variant="danger">
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default AddEmployee;
