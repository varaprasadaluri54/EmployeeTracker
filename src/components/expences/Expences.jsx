import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormInputs } from "../formInputs/FormInputs";

function Expences() {
  const [status, setStatus] = React.useState(false);
  const [data, setData] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(true);
    // setErrors(false);
    // ApiService.promoteEmployee(data)
    //     .then((res) => {
    //         console.log(res.data);
    //         alert("successfull");
    //         navigate("/dashboard");
    //     }
    //     )
    //     .catch((error) => {
    //         console.log(error);
    //     }
    //     );
  };

  return (
    <>
      {status ? (
        <Form>
          <FormInputs
            id="employeeId"
            title="Employee ID"
            name="employeeId"
            type="text"
            placeholder="Enter Employee ID"
            required="true"
            disabled="true"
            defaultValue={data.employeeId}
            handleChange={handleChange}
          />
          <FormInputs
            id="1"
            title="Cab"
            name="cab"
            type="text"
            placeholder="Enter Cab expences"
            required="true"
            defaultValue={data.cab}
            handleChange={handleChange}
          />
          <FormInputs
            id="2"
            title="Travel"
            name="travel"
            type="text"
            placeholder="Enter Travel expences"
            required="true"
            defaultValue={data.travel}
            handleChange={handleChange}
          />
          <FormInputs
            id="3"
            title="Food"
            name="food"
            type="text"
            placeholder="Enter Food expences"
            required="true"
            defaultValue={data.food}
            handleChange={handleChange}
          />
          <FormInputs
            id="3"
            title="Accomodation"
            name="accomodation"
            type="text"
            placeholder="Enter Accomodation expences"
            required="true"
            defaultValue={data.accomodation}
            handleChange={handleChange}
          />
          <Button variant="primary" type="submit" className=" px-2">
            submit
          </Button>{" "}
          <Button as={Link} to="/dashboard" variant="danger" className=" px-2">
            Cancel
          </Button>
        </Form>
      ) : (
        <Form onSubmit={handleSubmit}>
          <FormInputs
            id="employeeId"
            title="Employee ID"
            name="employeeId"
            type="text"
            placeholder="Enter Employee ID"
            required="true"
            defaultValue={data.employeeId}
            handleChange={handleChange}
          />
          <Button variant="primary" type="submit" className="px-2">
            submit
          </Button>{" "}
          <Button as={Link} to="/dashboard" variant="danger" className="px-2">
            Cancel
          </Button>
        </Form>
      )}
    </>
  );
}

export default Expences;
